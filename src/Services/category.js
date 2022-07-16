import { apiURL } from "../constants";
import axios from "axios";

export const getCategoryListService = async (token) => {
	try {
		let URL = apiURL + "admin/getCategory";
		let config = {
			headers: {
				Authorization: "Bearer " + token,
			},
		};
		let res = await axios.get(URL, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const getOneCategoryService = async (data) => {
	try {
		let URL = apiURL + "admin/subCategory/" + data.id;
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.get(URL, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const getSubCategoryListService = async (token) => {
	try {
		let URL = apiURL + "admin/getSubCategory";
		let config = {
			headers: {
				Authorization: "Bearer " + token,
			},
		};
		let res = await axios.get(URL, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const addCategoryService = async (data) => {
	try {
		let URL = apiURL + "admin/addCategory";
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.post(URL, data.value, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const addSubCategoryService = async (data) => {
	try {
		let URL = apiURL + "admin/addSubCategory";
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.post(URL, data.value, config);

		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};

export const updateCategoryService = async (data) => {
	try {
		let URL = apiURL + "admin/updateCategoryName";
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.put(URL, data.value, config);
		console.log(res.data);
		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
export const updateSubCategoryService = async (data) => {
	try {
		let URL = apiURL + "admin/updateSubCategory";
		let config = {
			headers: {
				Authorization: "Bearer " + data.token,
			},
		};
		let res = await axios.put(URL, data.value, config);
		console.log(res.data);
		return {
			success: true,
			data: res.data,
		};
	} catch (e) {
		console.log("Error message", e);
		return {
			success: false,
			data: {},
			message: e,
		};
	}
};
