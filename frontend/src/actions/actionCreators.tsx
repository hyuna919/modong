
// action type
const SET_ISLOGIN = "setIsLogin";
const SET_FOOTERSELECTED = "setFooterSelected"
const SET_COMMUNITYPROPSDATA = "setCommunityPropsData"

const SET_USER = "setUser"
const SET_TOKEN = "setToken"
const SET_REFRESHTOKEN = "setRefreshToken"
const SET_FCMTOKEN ="setFcmToken"


const SET_SIGU = "setSigu"
const SET_CITY = "setCity"
const SET_DONG = "setDong"
const SET_DONGCODE = "setDongCode"

// action method
const setIsLogin = (isLogin:number) => {
    return {
        type : SET_ISLOGIN,
        isLogin : isLogin,
    }
};
const setFooterSelected = (footerSelected:number) => {
    return {
        type : SET_FOOTERSELECTED,
        footerSelected : footerSelected,
    }
};

const setCommunityPropsData = (communityPropsData:number) => {
    return {
        type : SET_COMMUNITYPROPSDATA,
        communityPropsData : communityPropsData,
    }
};

// accounts
const setUser = (user:Object) => {
    return {
        type: SET_USER,
        user: user,
    }
}

const setToken = (token: string) => {
    return {
        type: SET_TOKEN,
        token: token
    }
}

const setRefreshToken = (refreshToken: string) => {
    return {
        type: SET_REFRESHTOKEN,
        refreshToken: refreshToken
    }
}

const setFcmToken = (fcmToken: string) => {
    return {
        type: SET_FCMTOKEN,
        fcmToken: fcmToken
    }
}

//address
const setSigu = (sigu: string) => {
    return {
        type: SET_SIGU,
        sigu: sigu
    }
}

const setCity = (city: string) => {
    return {
        type: SET_CITY,
        city: city
    }
}

const setDong = (dong: string) => {
    return {
        type: SET_DONG,
        dong: dong
    }
}

const setDongCode = (dongCode: number) => {
    return {
        type: SET_DONGCODE,
        dongCode: dongCode
    }
}

export const actionCreators = {
    setIsLogin,
    setFooterSelected,
    setCommunityPropsData,
    setUser,
    setToken,
    setRefreshToken,
    setFcmToken,
    setSigu,
    setCity,
    setDong,
    setDongCode,
}

// 중요! 하나로 묶어서 보내기. (default)
export default actionCreators;