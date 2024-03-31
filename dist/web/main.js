try {
    if (!aardio.aardio()) {
        alert("请勿在浏览器运行本网页！");
        window.close();
    }
    console.log(aardio.aardio());
}
catch (e) {
    alert("请勿在浏览器运行本网页！");
    window.close();
}

let down = null;
document.addEventListener('mousedown', function (e) {
    down = setTimeout(() => {
        if (isChildOf(e.target, document.getElementsByClassName("head")[0]))
            hitCaption();
    }, 100);
});
document.addEventListener('mouseup', function (e) {
    clearTimeout(down);
});

function isChildOf(child, parent) {
    // 如果parent不是元素节点或文档片段节点，则返回false
    if (parent.nodeType !== Node.ELEMENT_NODE && parent.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        return false;
    }
    if (child === parent) {
        return true;
    }
    while ((child = child.parentNode)) {
        if (child === parent) {
            return true;
        }
    }
    return false;
}

function zhichi() {
    window.open("https://afdian.net/a/sgml55370");
}

let Json = "";

window.onload = function () {
    getFile('C:/CCW Launcher/save.json').then((e) => {
        try {
            Json = e;
            let json = JSON.parse(e);
            let body = document.getElementsByClassName("body")[0];
            json.forEach(element => {
                let s = document.createElement("div");
                s.innerHTML = `
                <button id="schedule" class="b" onclick="opengame('${element.name}','${element.url}')">启动</button>
                <button id="schedule" class="b" onclick="lnk('${element.name}','${element.url}')">快捷方式</button>
                <button id="schedule" class="b" onclick="deletes('${element.name}','${element.url}')" style="aspect-ratio:1/1;background: #ff303373;">
                <img src="./删除.svg" alt="" class="icon">
                </button>
                <p id="schedulep">${element.name}</p>`
                body.insertBefore(s, body.firstChild)
            });
        }
        catch (e) {
            let json = '[]';
            setFile('save.json', JSON.stringify(json))
            Json = json;
            json = JSON.parse(json);
            let body = document.getElementsByClassName("body")[0];
            json.forEach(element => {
                let s = document.createElement("div");
                s.innerHTML = `
                <button id="schedule" class="b" onclick="opengame('${element.name}','${element.url}')">启动</button>
                <button id="schedule" class="b" onclick="lnk('${element.name}','${element.url}')">快捷方式</button>
                <button id="schedule" class="b" onclick="deletes('${element.name}','${element.url}')" style="aspect-ratio:1/1;background: #ff303373;">
                <img src="./删除.svg" alt="" class="icon">
                </button>
                <p id="schedulep">${element.name}</p>`
                body.appendChild()
            });
        }
    })
    setInterval(() => {
        getFile('C:/CCW Launcher/save.json').then((e) => {
            if (e !== Json) {
                location.reload()
            }
        })
    }, 1000);
    let myCookie = localStorage.getItem("zhuce");
    if (myCookie !== "1") {
        getquanxian();
    }

}

function getquanxian() {
    localStorage.setItem("zhuce", "1");
    PopUps("关于权限", "接下来共创世界启动器将会获取注册表权限，用于注册快捷启动（从共创世界的拓展中一键打开启动器作品或者安装游戏）</br>请务必点击允许</br>（拒绝后请在页面最下方重新获取）", () => {
        aardio.zhuce();
    }, 0)
}

function openjiaocheng() {
    openurl(`https://learn.ccw.site/article/336329b9-57df-44d5-b01a-b069fee2a7f7`);
}

/**
 * 弹出弹窗
 * @param {string} title 弹窗标题
 * @param {string} content 弹窗内容
 */
function PopUps(title, content, callback, type = 3, placeholder) {
    pup = document.createElement('div');
    pup.style.position = 'fixed';
    pup.style.top = '0px';
    pup.style.left = '0px';
    pup.style.width = '100%';
    pup.style.height = '100%';
    pup.style.zIndex = '9999';
    pup.style.transition = 'all 0.2s ease-out';
    pup.style.backgroundColor = '#00000000';
    pup.innerHTML = `
    <div id="myModal" class="modal">
        <div class="modals">
            <span class="close">&times;</span>
            <h2>${title}</h2>
            <div class="modal-content">
                ${content}
            </div>
        ${type > 0 ? '<button class="yes">确定</button>' : ''}
        ${type > 1 ? '<button class="no">取消</button>' : ''}
        ${type == 3 ? `<input class="input" id="input" placeholder="${placeholder !== undefined ? placeholder : ''}"></input>` : ''}
        </div>
    </div>
`;
    document.body.appendChild(pup);

    let modal = document.getElementById('myModal');
    let span = document.querySelector('.close');
    let yes = document.querySelector('.yes');
    let no = document.querySelector('.no');
    //创建点击事件
    if (yes)
        yes.addEventListener("click", function (e) {
            closePup(true, (a) => { callback(a); });
        })
    if (no)
        no.addEventListener("click", function (e) {
            closePup(false, (a) => { callback(a); });
        })
    if (span)
        span.onclick = function () {
            closePup(false, (a) => { callback(a); });
        }
    // 在用户点击其他地方时，关闭弹窗
    pup.addEventListener("click", function (e) {
        if (e.target == pup || e.target.className === "modal") {
            closePup(false, (a) => { callback(a); });
        }
    })
    setTimeout(() => {
        pup.style.backgroundColor = 'var(--shadow)';
        modal.style.height = '80%';
        document.getElementsByClassName('modals')[0].style.backgroundColor = 'var(--color-before)';
    }, 100);
}

function closePup(type, callback) {
    let modal = document.getElementById('myModal');
    let input = document.getElementById('input');
    let insite = type;
    if (input !== null) {
        if (type) {
            insite = input.value;
        }
    }
    pup.style.backgroundColor = '#00000000';
    modal.style.height = '0%';
    document.getElementsByClassName('modals')[0].style.backgroundColor = '#00000000';
    setTimeout(() => {
        pup.remove();
    }, 180);
    callback(insite);
}

function deletes(name, url) {
    getFile('C:/CCW Launcher/save.json').then((e) => {
        let json = JSON.parse(e);
        let s = 0;
        let jsons = [];
        json.forEach(element => {
            if (!(element.name === name && element.url === url)) {
                jsons.push(json[s]);
            }
            s++;
        });
        json = jsons;
        console.log(json, { name: name, url: url });
        setFile("save.json", JSON.stringify(json));
        deleteFile('C:/CCW Launcher/' + name + '.png')
        PopUps(name, "删除成功", () => {
            location.reload();
        }, 0)
    })
}


//

/**
 * 打开文件
 * @param {string} url 打开文件的路径
 * @param {string} mode "r+": 打开读写文件;"w+": 打开创建覆写读写文件;"a+": 打开创建读写追加文件
 */
function openFile(url, mode) {
    aardio.openFile(url, mode);
}
/**
 * 读取文件
 * @param {any} url 读取的内容下标：https://bbs.aardio.com/doc/reference/libraries/kernel/io/io.html
 * @returns 读取的文件结果
 */
async function readFile(url) {
    return await aardio.readFile(url);
}
/**
 * 写入到已打开的文件
 * @param {string} content 写入的内容
 */
function writeFile(content) {
    aardio.writeFile(content);
}
/**
 * 获取文件内容
 * @param {string} url 要读取文件的路径
 * @returns 读取的结果
 */
async function getFile(url) {
    return await aardio.getFile(url);
}
/**
 * 关闭已打开的文件
 */
function closeFile() {
    aardio.closeFile();
}
/**
 *  写入文件到指定路径
 * @param {string} url 文件路径
 * @param {string} content 复写内容
 * @param {boolean} append true:追加,false:复写
 */
function saveFile(url, content, append = false) {
    aardio.saveFile(url, content, append);
}
/**
 * 删除文件
 * @param {string} url 文件路径
 */
function deleteFile(url) {
    aardio.deleteFile(url);
}
/**
 * 创建文件夹
 * @param {string} url 需要创建的路径
 */
function createDir(url) {
    aardio.createDir(url);
}
/**
 * 使用vscode打开文件
 * @param {string} 要打开的文件链接 
 */
function openVSC(url) {
    aardio.openVSC(url);
}
/**
 * 打开IDE
 * @param {string} url 被打开的文件的名称
 */
function newform(url) {
    window.location.href = url;
}
/**
 * 设置跨网页变量
 * @param {string} content 要设置的内容
 */
function setvar(content) {
    aardio.setvar(content);
}
/**
 * 获取跨网页变量
 */
async function getvar() {
    return await aardio.getvar();
}
/**
 * 拖动网页
 */
function hitCaption() {
    aardio.hitCaption();
}
/**
 * 关闭
 */
function hitClose() {
    aardio.hitClose();
}
/**
 * 最小化
 */
function hitMin() {
    aardio.hitMin();
}
/**
 * 启动游戏
 */
function opengame(name, url) {
    aardio.opengame(name, url);
}
/**
 * 打开安装页面
 */
function openinstall() {
    aardio.openinstall();
}
/**
 * 账号管理
 */
function openlog() {
    aardio.openlog();
}
/**
 * 默认浏览器打开
 * @param {string} url 要打开的网页链接
 */
function openurl(url) {
    aardio.openurl(url);
}
/**
 * 创建游戏的快捷方式
 */
function lnk(name, url) {
    aardio.lnk(name, url);
    PopUps("快捷方式", "已成功创建快捷方式到桌面", () => {

    }, 1)
}
/**
 * 创建游戏的快捷方式
 */
function lnks() {
    aardio.lnks();
    PopUps("自动签到", "自动签到服务已启动，将在每次启动电脑时自动签到", () => {

    }, 1)
}
/**
 * 写入内容到储存内容（自动创建）
 * @param {string} name 文件名
 * @param {string} content 内容
 * @param {boolean} append true:追加;false:复写
 */
function setFile(name, content, append = false) {
    getFile('C:/CCW Launcher/' + name).then(function (res) {
        console.log(res)
        if (res === null) {
            createDir('C:/CCW Launcher');
            openFile('C:/CCW Launcher/' + name, 'w+');
            closeFile();
        }
        saveFile('C:/CCW Launcher/' + name, content, append);
    })
}
//以上为aardio接口翻译