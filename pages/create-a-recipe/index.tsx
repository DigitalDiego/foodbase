import React, { useState } from "react";
import { supabase } from "@/utils";
import {
  AiOutlinePlus,
  AiOutlineUpload,
  AiOutlineLoading,
} from "react-icons/ai";
import Head from "next/head";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { IData } from "@/types";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export default function CreateARecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<Array<any>>([]);
  const [instructions, setInstructions] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");
  const { user } = useUser();

  const uploadImage = async (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    const fileName = file.name;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, file);
    if (error) {
      console.log(error);
    } else {
      setImg(data.path);
      setLoading(false);
    }
  };

  const addIngredient = () => {
    if (ingredient.replace(/\s/g, "").length === 0) return null;
    const data: any = {
      id: uuidv4(),
      text: ingredient,
    };
    setIngredients([...ingredients].concat(data.text));
    setIngredient("");
  };

  const addInstruction = () => {
    if (instruction.replace(/\s/g, "").length === 0) return null;
    const data: any = {
      id: uuidv4(),
      text: instruction,
    };
    setInstructions([...instructions].concat(data.text));
    setInstruction("");
  };

  const deleteIngredient = (id: string) => {
    const data = [...ingredients].filter((item) => item.id !== id);
    setIngredients(data);
  };
  const deleteInstruction = (id: string) => {
    const data = [...instructions].filter((item) => item.id !== id);
    setInstructions(data);
  };

  const deleteFromStorage = async (name: string) => {
    await supabase.storage
      .from("images")
      .remove([name])
      .then(() => {
        setImg(null);
      });
  };

  const createRecipe = async () => {
    await supabase
      .from("recipe")
      .insert({
        title,
        description,
        ingredients,
        instructions,
        image: img,
        author: user?.firstName,
        authorId: user?.id,
      })
      .then(() => {
        toast.success("Recipe has been created!");
        setDescription("");
        setImg(null);
        setIngredients([]);
        setInstructions([]);
        setTitle("");
      });
  };
  return (
    <>
      <Head>
        <title>FoodBase | Create a Recipe</title>
      </Head>
      <div className="w-full px-[5vw] flex justify-start gap-[5vw] py-[5vh] flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-start flex-col gap-4">
          {/* Title */}
          <div className="flex items-center gap-2 w-full">
            <input
              className="grow h-10 bg-gray-200 px-4 rounded-full outline-none"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <div className="w-1/4 aspect-square border border-gray-400 rounded-lg">
              {!img && !loading ? (
                <label className="w-full h-full relative grid place-items-center">
                  <AiOutlineUpload className="text-xl" />
                  <input
                    className="absolute w-0 h-0"
                    type="file"
                    onChange={(e) => uploadImage(e)}
                  />
                </label>
              ) : loading ? (
                <div className="w-full h-full grid place-items-center">
                  <AiOutlineLoading className="text-xl animate-spin" />
                </div>
              ) : (
                img && (
                  <div className="w-full h-full grid place-items-center relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}` + img}
                      alt="uploaded image"
                      width={500}
                      height={500}
                      className="w-[120px] aspect-square object-cover rounded-lg"
                    />
                    <button
                      className="absolute top-0 right-0"
                      onClick={() => deleteFromStorage(img)}
                    >
                      <AiOutlinePlus className="rotate-45 text-xl text-red-700" />
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Description */}
          <textarea
            className="w-full h-[300px] rounded-lg bg-gray-200 p-4 resize-none outline-none"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Ingredients */}
          <div className="w-full flex flex-col gap-2">
            <p className="font-poppinsSemiBold">Ingredients</p>
            <div className="w-full flex items-center gap-2">
              <input
                className="px-4 h-10 bg-gray-200 outline-none rounded-full grow"
                placeholder="Ingredient"
                type="text"
                onChange={(e) => setIngredient(e.target.value)}
                value={ingredient}
              />
              <button
                className="w-10 h-10 rounded-full bg-[#212121] grid place-items-center text-[#f0f0f0]"
                onClick={addIngredient}
              >
                <AiOutlinePlus />
              </button>
            </div>
            {ingredients.length > 0 &&
              ingredients.map((item, idx) => (
                <div
                  className="w-full flex justify-between items-center h-10"
                  key={idx}
                >
                  <p>- {item}</p>
                  <button onClick={() => deleteIngredient(item.id)}>
                    <AiOutlinePlus className="rotate-45 text-red-700 text-xl cursor-pointer" />
                  </button>
                </div>
              ))}
          </div>
          {/* Instructions */}
          <div className="w-full flex flex-col gap-2">
            <p className="font-poppinsSemiBold">Instructions</p>
            <div className="w-full flex items-center gap-2">
              <input
                className="px-4 h-10 bg-gray-200 outline-none rounded-full grow"
                placeholder="Instruction"
                type="text"
                onChange={(e) => setInstruction(e.target.value)}
                value={instruction}
              />
              <button
                className="w-10 h-10 rounded-full bg-[#212121] grid place-items-center text-[#f0f0f0]"
                onClick={addInstruction}
              >
                <AiOutlinePlus />
              </button>
            </div>
            {instructions.length > 0 &&
              instructions.map((item, idx) => (
                <div
                  className="w-full flex justify-between items-center h-10"
                  key={item.id}
                >
                  <p>
                    {idx + 1}. {item}
                  </p>
                  <button onClick={() => deleteInstruction(item.id)}>
                    <AiOutlinePlus className="rotate-45 text-red-700 text-xl" />
                  </button>
                </div>
              ))}
          </div>
          {/* Post */}
          <button
            className="w-full bg-[#212121] rounded-full text-[#f0f0f0] h-10 disabled:opacity-50"
            type="submit"
            disabled={
              instructions.length === 0 ||
              ingredients.length === 0 ||
              title.replace(/\s/g, "").length === 0 ||
              description.replace(/\s/g, "").length === 0 ||
              !img
            }
            onClick={createRecipe}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
