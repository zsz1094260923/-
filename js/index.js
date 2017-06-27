$(function(){

    $.ajax({
        url:"http://127.0.0.1:3000/api/getindexmenu",
        dataType:"jsonp",
        success: function (data){
            var html =  template('result',data);
            $("#menu-in").html(html);
            $("#menu-in a:gt(7)").each(function(){
                this.className="hide";
            })
            $("#menu-in a:eq(7)").click(function(){
                $("#menu-in a:gt(7)").each(function(){
                    $(this).toggleClass("show");
                })
            })
        }
    })
    $.ajax({
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        dataType:"jsonp",
        success: function(data){
            var html=template("commen",data);
            console.log(data);
            $(".cu-list ul").html(html);
        }
    })
})



