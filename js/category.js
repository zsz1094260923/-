$(function () {
    $.ajax({
        url: "http://127.0.0.1:3000/api/getcategorytitle",
        dataType: "jsonp",
        success: function (data) {
            var html = template("six", data);
            $(".panel-group").html(html);
            var flag = true;
            $(".panel>.panel-heading>h4>a").click(function (e) {
                var titleid = $(this).attr("data-titleid");
                if(flag == true){
                    flag = false;
                    this.style="background-image: url(images/arrow2.gif)";
                    a();
                }else {
                    flag = true;
                    this.style="background-image: url(images/arrow1.gif)";
                    a();
                }
                function a (){
                    $.ajax({
                        url: "http://127.0.0.1:3000/api/getcategory",
                        json: "jsonp",
                        data:{"titleid":titleid},
                        success:function(data){
                            console.log(data);
                            var html1 = template("sixsix",data);
                            //var change = "#"+titleid+".panel-body >.row";
                            var change = $(e.target).parent().parent().parent().find(".panel-collapse").find(".panel-body");
                            console.log(change);
                            $(change).html(html1);
                        }
                    });
                }

            })
        }
    })
})
