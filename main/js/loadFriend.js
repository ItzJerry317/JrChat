var realjson;
                var page = 1;
                function loadFriends() {
                    var url = "/json/Friends.json";
                    var request = new XMLHttpRequest();
                    request.open("get", url);
                    request.send(null);
                    request.onload = function(){
                        if (request.status == 200) {
                            json = JSON.parse(request.responseText);
                            for (let i = 1; i <= 6; i++) {
                                document.getElementById("chat" + i).innerHTML = "";
                                var imgrefresh = document.getElementById("img" + i);
                                imgrefresh.src = "";
                            }
                            if (json.Friends.length == 0) {
                                document.getElementById("nochat").innerHTML = "你还没有好友呢……";
                            }
                            for (var i = 1 + (page-1) * 6; i <= json.Friends.length && i <= page*6; i++){
                                var pagecalc = i - (page-1) * 6;
                                document.getElementById("chat" + pagecalc).innerHTML = json.Friends[i-1].name;
                                var img = document.getElementById("img" + pagecalc);
                                img.src = json.Friends[i-1].headavatar;
                                console.log("did it")
                                if (i < 6) {
                                    var iplusone = i+1
                                    document.getElementById("chat" + iplusone).innerHTML = "";
                                }
                            }
                        }
                        else {
                            document.getElementById('Friendstip').innerHTML = "加载失败，请重试";
                        }
                        document.getElementById('page').innerHTML = page + " / " + Math.ceil(json.Friends.length / 6);
                    }
                }
                loadFriends();
                function previous() {
                    if (page == 1) {
                        console.warn("You are currently in page 1!");
                    }
                    else {
                        page -= 1;
                        loadFriends();
                    }
                }
                function next() {
                    var url = "/main/json/Friends.json";
                    var request = new XMLHttpRequest();
                    request.open("get", url);
                    request.send(null);
                    request.onload = function(){
                    if (request.status == 200) {
                        json = JSON.parse(request.responseText);
                    }
                    if (page == Math.ceil(json.Friends.length / 6)) {
                        console.warn("This is the last page!");
                    }
                    else {
                        page += 1;
                        loadFriends();
                    }
                }
            }