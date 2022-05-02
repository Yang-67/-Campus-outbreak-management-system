import axios from "./axios";
//登录
export const getLogin =(param)=>{
	return axios.request({
		url:'http://localhost:8081/user/login',
		method:'post',
		data:param
	})
}
// 查询个人信息
export const selectUserInfo =(userId)=>{
	return axios.request({
		url:'http://localhost:8081/user/selectUserInfo',
		method:'get',
		params:{userId:userId}
	})
}
// 修改个人信息
export const updUserInfo =(param)=>{
	return axios.request({
		url:'http://localhost:8081/user/updUserInfo',
		method:'post',
		data:param
	})
}
//修改密码
export const updUserPwd =(userId,userPwd)=>{
	return axios.request({
		url:'http://localhost:8081/user/updUserPwd',
		method:'get',
		params:{userId:userId,userPwd:userPwd}
	})
}
//条件查询并获取班级通知
export const getAllInformByUserId =(userId,pageNum,pageSize,informTitle)=>{
	return axios.request({
		url:'http://localhost:8081/inform/getAllInformByUserId',
		method:'get',
		params:{userId:userId,pageNum:pageNum,pageSize:pageSize,informTitle:informTitle}
	})
}
// 学生提交每日健康信息
export const insertHealthInfo =(param)=>{
	return axios.request({
		url:'http://localhost:8081/health/insertHealthInfo',
		method:'post',
		data:param
	})
}
//学生查询每日健康记录
export const getDayHealthInfo =(userId,pageNum,pageSize,inputStr,datetime1,datetime2)=>{
	return axios.request({
		url:'http://localhost:8081/health/getDayHealthInfo',
		method:'get',
		params:{userId:userId,pageNum:pageNum,pageSize:pageSize,location:inputStr,datetime1:datetime1,datetime2:datetime2}
	})
}
// 图表1
export const members1 =()=>{
	return axios.request({
		url:'http://localhost:8081/health/members1',
		method:'get',
	})
}
// 图表2
export const members2 =()=>{
	return axios.request({
		url:'http://localhost:8081/health/members2',
		method:'get',
	})
}
// 查询面向全体学生的通知
export const getStudentInfo =()=>{
	return axios.request({
		url:'http://localhost:8081/inform/getStudentInfo',
		method:'get',
	})
}
//根据健康信息的id删除
export const deleteInfoByHealthId =(healthId)=>{
	return axios.request({
		url:'http://localhost:8081/health/deleteInfoByHealthId',
		method:'get',
		params:{healthId:healthId}
	})
}