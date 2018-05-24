let publicFun = {
    // 验证手机号
    isPhoneNo: function (phone) {
        var pattern = /^1\d{10}$/;
        return pattern.test(phone);
    },
    formateDate: function (date, fm) {
        if (/(y+)/.test(fm)) {
            fm = fm.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        var o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fm)) {
                let str = o[k] + ''
                fm = fm.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
            }
        }
        return fm
    },
    removeDuplicatedItem: function (ar) {
        var ret = [];
        for (var i = 0, j = ar.length; i < j; i++) {
            if (ret.indexOf(ar[i]) === -1) {
                ret.push(ar[i]);
            }
        }

        return ret;
    },
    getYesterday() {//获取昨天日期
        let day1 = new Date();
        day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
        let s1 = day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();
        return s1;
    },
    //获取当前日期方法
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    getBeforeWeek(d) {//前七天
        d = new Date(d);
        d = +d - 1000 * 60 * 60 * 24 * 6;
        d = new Date(d);
        var year = d.getFullYear();
        var mon = d.getMonth() + 1;
        var day = d.getDate();
        let s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
        return s;
    },
    getBeforeMonth(d) {//前一个月
        d = new Date(d);
        d = +d - 1000 * 60 * 60 * 24 * 29;
        d = new Date(d);
        var year = d.getFullYear();
        var mon = d.getMonth() + 1;
        var day = d.getDate();
        let s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
        return s;
    }
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}
import Vue from 'vue'
import axios from 'axios'
var axiosApi = {
    Post: function (url, param, callback) {
        var userInfo = localStorage.getItem('audience_Info') ? JSON.parse(localStorage.getItem('audience_Info')) : '';
        return axios.post(url, param, {
            headers: {
                'accessToken': userInfo ? userInfo.token : '',
                'namespace': userInfo ? userInfo.namespace : '',
                'contentType': 'application/json',
                'Content-type': 'application/json;charset=UTF-8'
            }
        }).then((res) => {
            if (res.data.errCode == -110) {//没有userInfo跳到登陆页
            }
            if (res.data.errCode == 0) {
                callback(res.data)
            } else {
                Vue.$vux.loading.hide();
                Vue.$vux.alert.show({
                    content: res.data.errInfo
                });
            }
        })
            .catch((error) => {
                console.log(error);
                Vue.$vux.loading.hide();
                Vue.$vux.toast.text('服务器异常')
            })
    },

    Get(url, param, callback) {
        var userInfo = localStorage.getItem('audience_Info') ? JSON.parse(localStorage.getItem('audience_Info')) : '';
        return axios.get(url, {
            params: param,
            headers: {
                // 'accessToken': userInfo ? userInfo.token : '',
                // 'namespace': userInfo ? userInfo.namespace : '',
                // 'contentType': 'application/json',
                // 'Content-type': 'application/json;charset=UTF-8'
            }
        }).then((res) => {
            if (res.data.errCode == 0) {
                callback(res.data)
            } else {
                Vue.$vux.loading.hide();
                Vue.$vux.alert.show({
                    content: res.data.errInfo
                });
            }
        })
            .catch((error) => {
                console.log(error);
                Vue.$vux.loading.hide();
                Vue.$vux.toast.text('服务器异常', 'middle')

            })
    }
}
export {
    publicFun,
    axiosApi
}

