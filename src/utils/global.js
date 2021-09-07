// 全局常量
const global = {
    // 项目名
    PRODUCT: '提示',
    // 版本号
    VERSION: 'V0.1_20201223',
    // 首页路由的name
    INDEX_PAGE: 'index',
    // 登录路由的name
    LOGIN_PAGE: 'login',
    // 缓存类型
    STORAGE: 'localStorage',
    // 浏览器最小宽度
    BROWSER_MIN_WIDTH: 1200,
    // 分页设置
    SIZE_LIST: [10, 20, 30, 40],
    PAGE_ITEM() {
        return {
            total: 1,
            pageNum: 1,
            pageSize: global.SIZE_LIST[0]
        }
    },
    // -------------------- ajax --------------------
    // BASE_URL: '/apis', // 生产服务器
    // BASE_URL: 'http://112.35.29.174:28099/apis', // 外网服务器
    // BASE_URL: 'http://192.168.1.81:8085/', // 王子测试
    // BASE_URL: 'http://192.168.1.104:8085/', // 王未之测试
    // BASE_URL: 'http://192.168.1.184:8085/', // 天罡
    BASE_URL: 'http://112.35.77.123:28090/',

    // -------------------- ftp --------------------
    // FTP_URL: '/apis', // 生产服务器
    // FTP_URL: 'http://112.35.29.174:28099/apis', // 外网服务器
    // FTP_URL: 'http://192.168.1.81:8085/', // 外网服务器
    // FTP_URL: 'http://192.168.1.81:8085/', // 王子测试
    // FTP_URL: 'http://192.168.1.104:8085/', // 王未之
    FTP_URL: 'http://112.35.77.123:28090/',

    /**
     * rbac权限管理专用
     * 
     */
    // 默认密码
    DEFAULT_PASSWORD: '123456',
    // 管理员角色ID
    ADMIN_ID: '1',
    // rbac用户状态List--- 状态相反map需要changeMap
    USER_STATUS_MAP: changeMap([{
            value: '1',
            label: '正常',
            status: 'success'
        },
        {
            value: '3',
            label: '锁定',
            status: 'error'
        },
    ]),
    SCHEME_STATUS_MAP: changeMap([{
            value: '0',
            label: '关闭',
            status: 'error'
        },
        {
            value: '1',
            label: '发布',
            status: 'success'
        },
    ]),
    ANALYSE_STATUS_MAP: changeMap([{
            value: '00',
            label: '未发',
            status: 'error'
        },
        {
            value: '01',
            label: '已发',
            status: 'success'
        },
    ]),
    // 用户性别
    USER_STATUS_SEX: [{
            value: '1',
            label: '男',
            status: 'error'
        },
        {
            value: '2',
            label: '女',
            status: 'success'
        },
        {
            value: '0',
            label: '未知',
            status: 'success'
        },
    ],
    // 学生性别
    STUDENT_SEX: [{
            value: '1',
            label: '男'
        },
        {
            value: '2',
            label: '女'
        }

    ],
    POLICY_STATUS_MAP: changeMap([{
            value: '0',
            label: '未发',
            status: 'error'
        },
        {
            value: '1',
            label: '已发',
            status: 'success'
        },
        // { value: '02', label: '撤销', status: 'error' },
    ]),
    //交易流水交易状态
    DEALFLOW_STATUS_TYPE: [
        // {
        //     id: 0,
        //     label: '未支付',
        //     status: 'error'
        // },
        {
            id: 1,
            label: '已支付',
            status: 'success'
        },
        // {
        //     id: 2,
        //     label: '支付失败',
        //     status: 'error'
        // }, {
        //     id: 3,
        //     label: '已退款',
        //     status: 'error'
        // }, {
        //     id: 4,
        //     label: '已使用',
        //     status: 'success'
        // },
        // { value: '02', label: '撤销', status: 'error' },
    ],
    //交易流水交易类型
    DEALFLOW_STATUS_LERIX: [{
            value: 1,
            label: '查询服务支付',
        }, {
            value: 2,
            label: '智能选科支付',
        }
        // { value: '02', label: '撤销', status: 'error' },
    ],
    //轮播图管理状态
    BANNER_STATUS_TYPE: [{
            value: '0',
            label: '停用',
            status: 'error'
        }, {
            value: '1',
            label: '发布',
            status: 'success'
        },
        // { value: '02', label: '撤销', status: 'error' },
    ],
    //轮播图类型
    BANNER_STATUS_LEIX: [{
            value: 0,
            label: 'banner',
            status: 'error'
        }, {
            value: 1,
            label: '胶囊Banner',
            status: 'success'
        },
        // { value: '02', label: '撤销', status: 'error' },
    ],
    //新增用户折线图data
    COLUMN_DATA: [],
    //新增用户折线图x轴
    COLUMN_X_DATA: [],
    //用户活跃度折线图data
    USER_ACTIVE: [],
    //用户活跃度折线图x轴
    USER_ACTIVE_X: [],
    //住状图访问量
    BUSINESS_VISIT: [],
    // -----------------------------基本不需要更改的----------------------------------
    // ftp上传文件名称最大字数
    FILE_MAX_NAME: 50,
    // ftp上传文件最大字节
    FILE_MAX_SIZE: 10 * 1024 * 1024,
    // ftp上传图片最大字节
    IMG_MAX_SIZE: 5 * 1024 * 1024,
    // loading框
    LOADING: '',
    // loading框配置
    LOADING_INFO: {
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    },
}

/**
 * 修改map
 * 一些状态相反的map(显示/屏蔽),只设置了当前状态,需补充操作项的状态
 * @param {Array} *map 待操作map
 * @return {Array} 返回值 返回完整map
 * 
 */
function changeMap(map) {
    let [obj1, obj2] = map;
    [obj1.handleStatus, obj2.handleStatus] = [obj2.status, obj1.status];
    [obj1.handleValue, obj2.handleValue] = [obj2.value, obj1.value];
    [obj1.handleLabel, obj2.handleLabel] = [obj1.handleLabel || obj2.label, obj2.handleLabel || obj1.label];
    return map;
}

export default global;
