const mainContent = "Lại là tớ đây =)) Hôm nay là tròn 1 tháng kể từ khi mình bắt đầu nói chuyện với nhau rồi đấy. Tớ nghĩ Trung Thu sẽ là dịp phù hợp để mình gặp nhau thêm 1 lần nữa để có thể hiểu nhau hơn, Trung Thu vào ngày 29/09 nhưng để chuẩn bị cho cuộc hẹn thoải mái hơn thì tớ muốn hẹn cậu vào ngày 30/09. Tớ muốn mời cậu đi ăn 1 bữa thật ngonn, nhưng để cho cậu đỡ ngại thì tớ đã mời thêm 2 vị khách đặc biệt rồi nên là không cần lo lắng gì hết, cậu chỉ cần xinh đẹp thôi còn lại để tớ lo. Mọi thông tin về buổi hẹn tớ sẽ để ở bên phải tấm thiệp. Cậu cứ thoải mái suy nghĩ rồi trả lời tớ nhé. See yaaa!"

const allbum1 = {
    content: "Thời gian và địa điểm: 19h thứ 7 ngày 30/09 tại Haidilao Vincom Phạm Ngọc Thạch.",
    cdn: "hscontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/326530439_723898315842762_5789822743803497031_n.png?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Yxq36mWOLL8AX838yje&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBlxjnQt-_Lpbg7togvvzJmfVhYt8mDKp41JYtHUUJWdA&oe=6513BCBC"
}

const allbum2 = {
    content: "Còn đây là 2 khách mời đặc biệt mà ai cũng biết là ai =)))",
    cdn: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/282275455_1299128113951782_2387927390987432926_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=7GWw49LlsOMAX96_fo6&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAH0B4bFKiTGRDwXxDvWP9187WrZVCKBmpBFiqvels07w&oe=651588DC"
}

const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
    const letter = document.querySelector(".letter");
    letter.classList.add("active");
    setTimeout(() => {
        const designContent = mainContent.split("");
        const mainLetterPage = document.querySelector(".letterContent");

        designContent.forEach((val, index) => {
            setTimeout(() => {
                mainLetterPage.innerHTML += val;
                if (index == (designContent.length - 1)) {
                    const allBum1 = document.querySelector("#allbum1");
                    allBum1.classList.add("active");

                    setTimeout(() => {
                        const contentAllbum1 = allbum1.content.split("");
                        allBum1.querySelector(".imgAllbum").src = allbum1.cdn;

                        contentAllbum1.forEach((valAllbum1, indexAllbum1) => {
                            setTimeout(() => {
                                allBum1.querySelector(".detailAllbum").innerHTML += valAllbum1;
                                if (indexAllbum1 == (contentAllbum1.length - 1)) {
                                    const allBum2 = document.querySelector("#allbum2");
                                    allBum2.classList.add("active");

                                    setTimeout(() => {
                                        const contentAllbum2 = allbum2.content.split("");
                                        allBum2.querySelector(".imgAllbum").src = allbum2.cdn;

                                        contentAllbum2.forEach((valAllbum2, indexAllbum2) => {
                                            setTimeout(() => {
                                                allBum2.querySelector(".detailAllbum").innerHTML += valAllbum2   
                                            }, 100 * (indexAllbum2 + 1))
                                        })
                                    })
                                }
                            }, 100 * (indexAllbum1 + 1))
                        })
                    }, 500)
                }
            }, 10 * index)
        })
    }, 500)
})