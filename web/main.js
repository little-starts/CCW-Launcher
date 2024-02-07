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

document.addEventListener('mousedown', function (e) {
    if (e.target === document.getElementsByClassName("head")[0])
        hitCaption();
});

window.onload = function () {
    getFile('C:/CCW Launcher/save.json').then((e) => {
        try {
            let json = JSON.parse(e);
            let body = document.getElementsByClassName("body")[0];
            json.forEach(element => {
                let s = document.createElement("div");
                s.innerHTML = `<button id="schedule" class="b" onclick="opengame('${element.name}','${element.url}')">启动</button><p id="schedulep">${element.name}</p>`
                body.appendChild(s)
            });
        }
        catch (e) {
            let json = '[]';
            setFile('save.json', JSON.stringify(json))
            json = JSON.parse(json);
            let body = document.getElementsByClassName("body")[0];
            json.forEach(element => {
                let s = document.createElement("div");
                s.innerHTML = `<button id="schedule" class="b" onclick="opengame('${element.name}','${element.url}')">启动</button><p id="schedulep">${element.name}</p>`
                body.appendChild()
            });
        }
    })
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
    yes.addEventListener("click", function (e) {
        closePup(true, (a) => { callback(a); });
    })
    no.addEventListener("click", function (e) {
        closePup(false, (a) => { callback(a); });
    })
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
 * 账号管理
 */
function openurl(url) {
    aardio.openurl(url);
}
//以上为aardio接口翻译