import Button from "@ui/Button";
import Modal from "@ui/Modal";
import SelectField from "@ui/SelectField";
import { useFormik } from "formik";
import React from "react";
import { usePriceListStore } from "stores/pricelist";
import { carat, clarity, colors, types } from "./ListConstants";
import * as yup from "yup";
import { mySleep } from "@utils/index";
import Image from "next/image";

const validationSchema = yup.object().shape({
  listType: yup.string().required("Required"),
  color: yup.string().required("Required"),
  carat: yup.string().required("Required"),
  clarity: yup.string().required("Required"),
});

const QuickFind = () => {
  const isOpen = usePriceListStore((state) => state.quickFindIsOpen);
  const setIsOpen = usePriceListStore((state) => state.setQuickFindIsOpen);
  const listType = usePriceListStore((state) => state.listType);
  const setListType = usePriceListStore((state) => state.setListType);
  const formik = useFormik({
    validationSchema,
    initialValues: {
      listType,
      color: "D",
      carat: "0.3-0.39",
      clarity: "IF",
    },
    onSubmit: async (values) => {
      const el = document.getElementById(
        [values.color, values.carat, values.clarity].join("")
      );
      if (!el) return;
      closeModal();
      await mySleep(300);
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      await mySleep(1100);
      el.focus();
      const className = "quick-find__cell";
      el.classList.add(className);
      await mySleep(3000);
      el.classList.remove(className);
    },
  });

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button
        onClick={openModal}
        className="ml-2 flex h-10 w-10 items-center justify-center rounded-md bg-black"
      >
        <Image
          src="/assets/images/search-white.svg"
          alt="quick find price"
          width={24}
          height={24}
        />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <form
          className="mx-auto w-fit rounded-md bg-white p-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-cols-[repeat(4,180px)] gap-x-4">
            <SelectField
              options={types}
              label="List type"
              name="listType"
              inputId="listType"
              value={
                (types
                  ? types.find(
                      (option) => option.value === formik.values.listType
                    )
                  : null) as any
              }
              onChange={(option: any) => {
                setListType(option.value);
                formik.setFieldValue(
                  "listType",
                  option ? option.value : "",
                  true
                );
              }}
              blurInputOnSelect
              touched={formik.touched.listType}
              error={formik.errors.listType}
              placeholder="Choose from list..."
            />
            <SelectField
              options={colors}
              label="Color"
              name="color"
              inputId="color"
              value={
                (colors
                  ? colors.find(
                      (option) => option.value === formik.values.color
                    )
                  : null) as any
              }
              onChange={(option: any) => {
                formik.setFieldValue("color", option ? option.value : "", true);
              }}
              blurInputOnSelect
              touched={formik.touched.color}
              error={formik.errors.color}
              placeholder="Choose from list..."
            />
            <SelectField
              options={carat}
              label="Carat"
              name="carat"
              inputId="carat"
              value={
                (carat
                  ? carat.find((option) => option.value === formik.values.carat)
                  : null) as any
              }
              onChange={(option: any) => {
                formik.setFieldValue("carat", option ? option.value : "", true);
              }}
              blurInputOnSelect
              touched={formik.touched.carat}
              error={formik.errors.carat}
              placeholder="Choose from list..."
            />

            <SelectField
              options={clarity}
              label="Clarity"
              name="clarity"
              inputId="clarity"
              value={
                (clarity
                  ? clarity.find(
                      (option) => option.value === formik.values.clarity
                    )
                  : null) as any
              }
              onChange={(option: any) => {
                formik.setFieldValue(
                  "clarity",
                  option ? option.value : "",
                  true
                );
              }}
              blurInputOnSelect
              touched={formik.touched.clarity}
              error={formik.errors.clarity}
              placeholder="Choose from list..."
            />
          </div>
          <Button className="mt-4 h-[56px] w-[180px]">Find Price</Button>
        </form>
      </Modal>
    </>
  );
};

export default QuickFind;
