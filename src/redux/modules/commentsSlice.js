import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

export const __getCommentsThunk = createAsyncThunk(
  "GET_COMMENTS",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/comments`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getCommnetsByMusicId = createAsyncThunk(
  "GET_COMMENT_BY_MUSIC_ID",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/comments?musicId=${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      await axios.delete(`${serverUrl}/comments/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      axios.patch(`${serverUrl}/comments/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post(`${serverUrl}/comments`, arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByMusicId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.comments = null;
    },
  },
  extraReducers: {
    // 전체 댓글 조회
    [__getCommentsThunk.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__getCommentsThunk.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getCommentsThunk.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },

    // 댓글 조회 (todoId)
    [__getCommnetsByMusicId.pending]: (state) => {
      state.commentsByMusicId.isLoading = true;
    },
    [__getCommnetsByMusicId.fulfilled]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      state.commentsByMusicId.data = action.payload;
    },
    [__getCommnetsByMusicId.rejected]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      state.commentsByMusicId.error = action.payload;
    },

    // 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.commentsByMusicId.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      const target = state.commentsByMusicId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsByMusicId.data.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      state.commentsByMusicId.error = action.payload;
    },

    // 댓글 수정
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      const target = state.commentsByMusicId.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.isLoading = false;
      state.commentsByMusicId.data.splice(target, 1, action.payload);
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 추가
    [__addComment.pending]: (state) => {
      state.commentsByMusicId.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      state.commentsByMusicId.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      state.commentsByMusicId.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
