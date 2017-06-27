$(function(){

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var  categoryid = GetQueryString("categoryid");
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorybyid",
        json:"jsonp",
        data:{categoryid:categoryid},
        success:function(data){
            var html = template("sad",data);
            $("#nav>.nav-l").html(html);
            $.ajax({
                url:"http://127.0.0.1:3000/api/getproductlist",
                json:"jsonp",
                data:{categoryid:categoryid},
                success:function(data){
                    var page = data.totalCount/data.pagesize;
                    var html2 = "";
                    for (var i = 0; i < page; i++) {
                        html2 += "<li>ตฺ"+(i+1)+"าณ</li>";
                    }
                    $(".dropdown-menu").html(html2);
                    var html1 = template("bad",data);
                    $("#art").html(html1);
                }
            })
        }
    })
})

