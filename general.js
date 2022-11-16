// header
const body = document.querySelector(".body");
export const header = document.createElement("div");

header.classList.add("header");
body.appendChild(header);

// left
const left = document.createElement("div");
header.appendChild(left);
left.classList.add("left");
left.innerHTML = `<img class="profile-img" src="./img/profile.jpg">`;

//right
const right = document.createElement("div");
header.appendChild(right);
right.classList.add("right");

const account = document.createElement("div");
right.appendChild(account);
account.classList.add("account");
account.innerHTML = `<a href="https://www.instagram.com/lalalalisa_m/">lalalalisa_m</a>`;
account.innerHTML += `&nbsp;<i class="fa-solid fa-circle-check"></i>`;
account.innerHTML += `<button class="btn-follow">追蹤</button>`;
account.innerHTML += `<button class="btn-user"><i class="fa-solid fa-user-plus fa-xs"></i></button>`;
account.innerHTML += `<i class="fa-solid fa-ellipsis"></i>`;

const follow = document.createElement("div");
right.appendChild(follow);
follow.classList.add("follow");
follow.innerHTML = `<ul>
                        <li><div><b>916 </b>貼文</div></li>
                        <li><b>8414 萬</b>位粉絲</li>
                        <li><b>0 </b>追蹤中</li>
                    </ul>`;

const name = document.createElement("div");
right.appendChild(name);
name.classList.add("name");
name.innerHTML = `<span><b>LISA</b></span> </br> 🖤💗`;