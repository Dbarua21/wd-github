import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pazzaData from "./pazzaData.json" assert { type: "json" };
const typedPazzaData = pazzaData as unknown as PazzaState;

interface Post {
  _id: string;
  title: string;
  summary: string;
  folder: string;
  views: number;
  author: string;
  details: string;
}

interface PazzaState {
  posts: Post[];
  folders: string[];
  currentUser: {
    _id: string;
    name: string;
    role: "student" | "instructor";
  };
}

const initialState: PazzaState = {
    posts: typedPazzaData.posts,
    folders: typedPazzaData.folders,
    currentUser: typedPazzaData.currentUser,
  };

const pazzaSlice = createSlice({
  name: "pazza",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((p) => p._id !== action.payload);
    },
    addFolder: (state, action: PayloadAction<string>) => {
      state.folders.push(action.payload);
    },
    removeFolder: (state, action: PayloadAction<string>) => {
      state.folders = state.folders.filter((f) => f !== action.payload);
    },
  },
});

export const { addPost, deletePost, addFolder, removeFolder } = pazzaSlice.actions;
export default pazzaSlice.reducer;
