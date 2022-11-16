// container
const body = document.querySelector(".body");
export const container = document.createElement("div");

container.classList.add("container");
body.appendChild(container);

// tab
const tab = document.createElement("div");
container.appendChild(tab);
tab.classList.add("tab");

tab.innerHTML = `<button class="tab-switch" onclick="TabToggle(event, 'Posts')" id="defaultTab"><i class="fa-solid fa-table-cells fa-xs"></i>Posts</button>
                 <button class="tab-switch" onclick="TabToggle(event, 'Reels')"><i class="fa-solid fa-film fa-xs"></i> Reels</button>
                 <button class="tab-switch" onclick="TabToggle(event, 'Tagged')"><i class="fa-solid fa-tags fa-xs"></i>Tagged</button>`;

const content = document.createElement("div");
container.appendChild(content);
content.classList.add("tab-container");

content.innerHTML = `<div id="Posts" class="tab-content"></div>
                      <div id="Reels" class="tab-content"></div>
                      <div id="Tagged" class="tab-content"></div>`;

document.getElementById("defaultTab").click();

// posts
const posts = document.getElementById("Posts");
const postPic = document.createElement("div");
posts.appendChild(postPic);
postPic.classList.add("posts");
postPic.innerHTML = `<ul>
                        <li><a href="https://www.instagram.com/p/Ck9R1K8hzcY/"><img class="post-pic" src="./img/post (1).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkzELibBW9S/"><img class="post-pic" src="./img/post (2).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkxL_QWszxL/"><img class="post-pic" src="./img/post (3).jpeg"></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.instagram.com/p/Ckws5yTvtvE/"><img class="post-pic" src="./img/post (4).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkwpqZSvqsk/"><img class="post-pic" src="./img/post (5).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkturMABzW3/"><img class="post-pic" src="./img/post (6).jpeg"></a></li>
                    </ul>`;

// reels
const reels = document.getElementById("Reels");
const reelPic = document.createElement("div");
reels.appendChild(reelPic);
reelPic.classList.add("posts");
reelPic.innerHTML = `<ul>
                        <li><a href="https://www.instagram.com/p/CktuNbbh8tX/"><img class="post-pic" src="./img/post (7).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CktsrVYBA15/"><img class="post-pic" src="./img/post (8).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkRwz1QLpbm/"><img class="post-pic" src="./img/post (9).jpeg"></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.instagram.com/p/CkOmU5Zy4_0/"><img class="post-pic" src="./img/post (10).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkHQOCXBoT0/"><img class="post-pic" src="./img/post (11).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkG5gYphp6K/"><img class="post-pic" src="./img/post (12).jpeg"></a></li>
                    </ul>`;

// reels
const tagged = document.getElementById("Tagged");
const tagPic = document.createElement("div");
tagged.appendChild(tagPic);
tagPic.classList.add("posts");
tagPic.innerHTML = `<ul>
                        <li><a href="https://www.instagram.com/p/CkEpEmfriZy/"><img class="post-pic" src="./img/post (13).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkEoQBRj2c4/"><img class="post-pic" src="./img/post (14).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CkEoKkSLzkb/"><img class="post-pic" src="./img/post (15).jpeg"></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.instagram.com/p/Cj8_wNSBvdu/"><img class="post-pic" src="./img/post (16).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/Cj8_pegBrJt/"><img class="post-pic" src="./img/post (17).jpeg"></a></li>
                        <li><a href="https://www.instagram.com/p/CjrlNbALaDc/"><img class="post-pic" src="./img/post (18).jpeg"></a></li>
                    </ul>`;

// footer
const footer = document.createElement("div");
container.appendChild(footer);
footer.classList.add("footer");

footer.innerHTML = `Copyright © 2022 Zoey. All rights reserved.`;