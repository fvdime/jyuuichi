import CreateCategoryForm from "@/components/CreateCategoryForm";
import React from "react";

export default async function Add() {
  return (
    <div className="p-4 sm:ml-64 max-w-screen-xl mx-auto">
      <CreateCategoryForm />
    </div>
  );
}
