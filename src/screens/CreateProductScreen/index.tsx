import React, { useState } from "react";
import { ScrollView, Alert, useWindowDimensions } from "react-native";
import { Formik } from "formik";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { PhotoPreview } from "../../components/photoPreview";
import { BUTTON_TYPE } from "../../components/Button/types";
import { uploadImage } from "../../utils/uploadImage";
import { setLoading, CategoryArr, setProduct } from "../../store/slice";
import { productValidationSchema } from "./helper";
import { createProduct } from "../../apis/products";
import { getToken } from "../../apis/auth";
import { RootStackScreenProps } from "../../../types";
import { ErrorText } from "../../components/Input/style";

import {
  Container,
  Title,
  CameraReact,
  CameraButtonWrapper,
  CameraButton,
  ImageNameWrapper,
  ImageName,
  CloseIcon,
} from "./styles";
import theme from "../../theme";

export default function CreateProductScreen({
  navigation,
}: RootStackScreenProps<"createProduct">) {
  const [startCamera, setStartCamera] = useState<Boolean>(false);
  const [isPreview, setIsPreview] = useState<Boolean>(false);
  const [image, setImage] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<any>(null);
  const [base64Image, setBase64Image] = useState<any>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [show, setShow] = useState<Boolean>(false);
  const [isDateSelected, setIsDateSelected] = useState<Boolean>(false);
  const [category, setCategory] = useState<string>("home");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const { height, width } = useWindowDimensions();

  let camera: Camera | null;

  const handleStartCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      const photo = { uri: result.assets[0].uri };

      setIsPreview(true);
      setImage(photo);
      setBase64Image(`data:image/jpg;base64,${result.assets[0].base64}`);
    }
  };

  const handleTakePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync({ base64: true });
    setIsPreview(true);
    setImage(photo);
    setBase64Image(`data:image/jpg;base64,${photo.base64}`);
  };

  const handleRetake = () => {
    setIsPreview(false);
    setImage(null);
  };

  const handleSetPhoto = async () => {
    try {
      dispatch(setLoading(true));
      const result = await uploadImage(base64Image);
      setUploadedImage(result);
      setIsPreview(false);
      setStartCamera(false);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      setIsPreview(false);
      setStartCamera(false);
      setImage(null);
    }
  };

  const handleCreateProduct = async (
    name: string,
    price: string,
    description: string,
    image: string,
    manufactureDate: string,
    category: string
  ) => {
    try {
      const token = await getToken();
      if (token) {
        dispatch(setLoading(true));
        const result = await createProduct(
          name,
          price,
          description,
          image,
          manufactureDate,
          category,
          token
        );
        const { data } = result;
        dispatch(setProduct(data.product));
        navigation.navigate("Home");
        dispatch(setLoading(false));
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      if (error.response && error.response.data && error.response.data.errors) {
        setError(error.response.data.errors[0].message);
      } else {
        setError("something went wrong! try again");
      }
    }
  };

  const removePhoto = () => {
    setImage(null);
  };

  const removeDate = () => {
    setIsDateSelected(false);
    setDate(new Date());
  };

  const imageName = (url: string) => {
    const arr = url.split("/");
    return arr[arr.length - 1];
  };

  const dateValue = (val: Date) => {
    return moment(val).format("MMM Do YY");
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setIsDateSelected(true);
    setDate(currentDate);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container height={height}>
        <Title size={15} mb={15}>
          Provide the information below:
        </Title>
        <Formik
          validationSchema={productValidationSchema}
          initialValues={{ name: "", price: "", description: "" }}
          onSubmit={async (values) => {
            const formattedDate = date && dateValue(date);
            handleCreateProduct(
              values.name,
              values.price,
              values.description,
              uploadedImage,
              formattedDate!,
              category
            );
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <>
              <Input
                name="name"
                label="Name"
                mb={20}
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                error={touched.name && errors.name ? errors.name : undefined}
              />
              <Input
                name="price"
                label="Price"
                mb={20}
                value={values.price}
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                error={touched.price && errors.price ? errors.price : undefined}
              />
              <Input
                name="description"
                label="Short description"
                multiline
                numberOfLines={4}
                mb={20}
                height={70}
                value={values.description}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                error={
                  touched.description && errors.description
                    ? errors.description
                    : undefined
                }
              />
              {!image && (
                <>
                  <Button
                    name="Take a photo"
                    buttonType={BUTTON_TYPE.OUTLINED}
                    mt={5}
                    showIcon={true}
                    icon={
                      <Icon
                        name="camera-retro"
                        size={20}
                        color={theme.colors.primary}
                      />
                    }
                    onPress={handleStartCamera}
                  />
                  <Button
                    name="Choose a picture"
                    buttonType={BUTTON_TYPE.OUTLINED}
                    mt={5}
                    showIcon={true}
                    icon={
                      <Icon
                        name="image"
                        size={20}
                        color={theme.colors.primary}
                      />
                    }
                    onPress={pickImage}
                  />
                </>
              )}
              {!isPreview && !startCamera && image && (
                <ImageNameWrapper>
                  <ImageName>{imageName(image.uri)}</ImageName>
                  <CloseIcon onPress={removePhoto}>
                    <Icon
                      name="window-close"
                      size={22}
                      color={theme.colors.primary}
                    />
                  </CloseIcon>
                </ImageNameWrapper>
              )}
              {isDateSelected ? (
                <ImageNameWrapper>
                  <ImageName>
                    Manufacture date: {date && dateValue(date)}
                  </ImageName>
                  <CloseIcon onPress={removeDate}>
                    <Icon
                      name="window-close"
                      size={22}
                      color={theme.colors.primary}
                    />
                  </CloseIcon>
                </ImageNameWrapper>
              ) : (
                <Button
                  name="Manufacture date"
                  buttonType={BUTTON_TYPE.OUTLINED}
                  mt={5}
                  showIcon={true}
                  icon={
                    <Icon
                      name="calendar-o"
                      size={20}
                      color={theme.colors.primary}
                    />
                  }
                  onPress={showDatepicker}
                />
              )}
              <Title>Category</Title>
              <Picker
                selectedValue={category}
                style={{
                  fontSize: 16,
                  paddingHorizontal: 10,
                  borderRadius: 6,
                  paddingRight: 30,
                  width: 300,
                  alignSelf: "center",
                  marginTop: 10,
                  backgroundColor: theme.colors.primary1,
                }}
                onValueChange={(itemValue, itemIndex) => {
                  setCategory(itemValue);
                }}
              >
                {CategoryArr.map((item, i) => (
                  <Picker.Item key={i} label={item} value={item} />
                ))}
              </Picker>
              {error && <ErrorText>{error}</ErrorText>}
              <Button
                name="Create"
                onPress={handleSubmit}
                disabled={!isValid || !uploadedImage || !date || !category}
              />
            </>
          )}
        </Formik>
        {isPreview && image ? (
          <PhotoPreview
            retake={handleRetake}
            setPhoto={handleSetPhoto}
            photo={image}
          />
        ) : startCamera ? (
          <CameraReact
            width={width}
            height={height - 120}
            type={CameraType.back}
            ref={(r: Camera | null) => {
              camera = r;
            }}
            check
          >
            <CameraButtonWrapper>
              <CameraButton onPress={handleTakePicture} />
            </CameraButtonWrapper>
          </CameraReact>
        ) : null}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date || new Date()}
            mode="date"
            is24Hour={true}
            onChange={handleDateChange}
          />
        )}
      </Container>
    </ScrollView>
  );
}
