import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://127.0.0.1:8080/api/getSpecificTask");
        return response.data.Task; // Assuming `Task` is the array of tasks in the response
    } catch (error) {
        return rejectWithValue("Failed to fetch tasks");
    }
});

// Async thunk for adding a new task
export const addTask = createAsyncThunk("tasks/addTask", async (taskData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8080/api/inserTask", {
            user: taskData.user,
            title: taskData.title,
            dueDate: taskData.dueDate,
            details: taskData.details,
        });
        return response.data;
    } catch (error) {
        return rejectWithValue("Failed to add task");
    }
});

const initialState = {
    Task: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

// Task slice definition
const TaskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = ""; // clear the message
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch tasks
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Task = action.payload; // Populate Task array with fetched tasks
                state.message = "Tasks fetched successfully";
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload || "Failed to fetch tasks";
            })
            // Add task
            .addCase(addTask.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Task.push(action.payload); // Add the new task to Task array
                state.message = action.payload.message || "Task added successfully";
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload || "Failed to add task";
            });
    },
});

export const { clearMessage } = TaskSlice.actions;
export default TaskSlice.reducer;
