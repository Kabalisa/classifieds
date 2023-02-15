import React, { useState } from "react";
import {
  ScrollView,
  Alert,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import RNPickerSelect from "react-native-picker-select";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { PhotoPreview } from "../../components/photoPreview";
import { BUTTON_TYPE } from "../../components/Button/types";

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

export default function CreateProductScreen() {
  const [startCamera, setStartCamera] = useState<Boolean>(false);
  const [isPreview, setIsPreview] = useState<Boolean>(false);
  const [image, setImage] = useState<any>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<Boolean>(false);
  const [isDateSelected, setIsDateSelected] = useState<Boolean>(false);
  const [category, setCategory] = useState<string>("");

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
    });

    if (!result.canceled) {
      const photo = { uri: result.assets[0].uri };

      setIsPreview(true);
      setImage(photo);
    }
  };

  const handleTakePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setIsPreview(true);
    setImage(photo);
  };

  const handleRetake = () => {
    setIsPreview(false);
    setImage(null);
  };

  const handleSetPhoto = () => {
    setIsPreview(false);
    setStartCamera(false);
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
    <ScrollView>
      <Container>
        <Title size={15} mb={15}>
          Provide the information below:
        </Title>
        <Formik
          initialValues={{ name: "", price: "", descripiton: "" }}
          onSubmit={(values) => console.log("\n\n values", values, "\n\n")}
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
                name="descripiton"
                label="Short descripiton"
                multiline
                numberOfLines={4}
                mb={20}
                height={70}
                value={values.descripiton}
                onChangeText={handleChange("descripiton")}
                onBlur={handleBlur("descripiton")}
                error={
                  touched.descripiton && errors.descripiton
                    ? errors.descripiton
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
                  <ImageName>Manufacture date: {dateValue(date)}</ImageName>
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
              <RNPickerSelect
                onValueChange={(value) => setCategory(value)}
                items={[
                  { label: "JavaScript", value: "JavaScript" },
                  { label: "TypeScript", value: "TypeScript" },
                  { label: "Python", value: "Python" },
                  { label: "Java", value: "Java" },
                  { label: "C++", value: "C++" },
                  { label: "C", value: "C" },
                ]}
                value={category}
                style={pickerSelectStyles}
              />
              <Button
                name="Create"
                onPress={handleSubmit}
                disabled={!isValid}
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
            value={date}
            mode="date"
            is24Hour={true}
            onChange={handleDateChange}
          />
        )}
      </Container>
    </ScrollView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 4,
    color: theme.colors.white,
    paddingRight: 30,
    width: 300,
    alignSelf: "center",
    marginTop: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: theme.colors.primary,
    borderRadius: 8,
    color: theme.colors.white,
    paddingRight: 30,
    width: 300,
    alignSelf: "center",
    marginTop: 10,
  },
});
