var MenuSlide = function (params) {
    var menu = this;
    var defaults = {
        numberIteminLine: 3,
        maxLinePageSlide: 2,
        classItemSlide: "swiper-slide",
        classWrapContent: "swiper-wrapper",
        classSwiperPageinationHeader: "swiper-pagination_header",
        classSwiperPageinationFooter: "swiper-pagination_footer",
        classHeader: "swiper-menu-header",
        classFooter: "swiper-menu-footer",
        classTableRow: "swiper-menu-tablerow",
        classTableItem: "swiper-menu-item",
        classTableItemIcon: "swiper-menu-item-icon",
        classTableItemText: "swiper-menu-item-text",
        itemClick: "gotoAction"

    }
    var params = params || defaults;
    menu.headerContent = new Array();
    menu.footerContent = new Array();
   
   
    menu.addHeaderContent = function (params) {
        var headerObject;
        for (var i = 0; i < params.length; i++) {
            headerObject = params[i];
            menu.headerContent.push(headerObject);

        }
    }
    menu.addFooterContent = function (params) {
        var footerObject;
        for (var i = 0; i < params.length; i++) {
            footerObject = params[i];
            menu.footerContent.push(footerObject);

        }
    }
    menu.htmlHeader = "";

    /**
		QuyenNT sua theo yeu cau TGD cho trang tin dung len dau tien
    **/

     menu.initHeader = function () {
        var listData = menu.headerContent;
        var length = listData.length;
        var menuHeader = "<div class = '" + params.classHeader + "'>   <div class='" + params.classWrapContent + "'>";
        var maxItemonPage = params.numberIteminLine * params.maxLinePageSlide;

        //kiem tra xem co module tin dung hay khong
         var haveString = -1;
        if(listData.length > 0){
            var haveString = listData[0].src.indexOf("guarantee/create/cre_request_create");
        }
        if(haveString > -1)
        {
        	length = listData.length + 2;
        }

        var numberPage = Math.floor(length / maxItemonPage);

        if ((length % maxItemonPage) > 0) {
            numberPage += 1;

        }
        var arrContent;
        var menuContent = "";
        var check = 0;
        //Ket thuc kiem tra


        for (var i = 0; i < numberPage; i++) {
            console.log("menuContent1" + menuContent);
            menuContent = menuContent + "<div class='" + params.classItemSlide + "'>";
            arrContent = new Array();
            arrContent = listData.slice((i * maxItemonPage), ((i * maxItemonPage) + maxItemonPage));
            var lengthArr = arrContent.length;
            //menuContent = menuContent + "<table><div class=" + params.classTableRow + "' style='display:table; margin: 0 auto;'>";
             menuContent = menuContent + "<table><div class='" + params.classTableRow + "'>";

             /**
				Neu co chuoi tin dung thi fix menu len dau	
             **/
              if(haveString > -1)
        	  {
        	  	var contentDetail;
        	  	if(check == 0)
        	  	{
        	  		var contentDetail = arrContent[0];

        	  		menuContent = menuContent + "<div onclick = \x22" +  contentDetail.src + "\x22 class='" + params.classTableItem + "'>";
                	menuContent = menuContent +"<div class='"+ params.classTableItemIcon + "'>"+"<em style='color:"+contentDetail.color +";' class='" + contentDetail.icon + "  iconmenu_slide '></em></div><div class ='"+params.classTableItemText +"'>" + contentDetail.title + "</div></div>";
                	menuContent = menuContent + "</div></table>" + "<table><div class='" + params.classTableRow + "' >";
                	check = 1;
        	  	} //end check
        	  	

                var k=1;
	            for (var j = 0; j < lengthArr - 1; j++) {
	                contentDetail = arrContent[j + 1];
	                 
	                if (j  == (params.numberIteminLine*k)) {
	                   // menuContent = menuContent + "</div></table>" + "<table><div class=" + params.classTableRow + "' style='display:table; margin: 0 auto;'>";
	                     menuContent = menuContent + "</div></table>" + "<table><div class='" + params.classTableRow + "' >";
	                   k=k+1;
	                }
	                //menuContent = menuContent + "<div class=" + params.classTableItem + "' style='display: table-cell; margin: 0 auto;'>";
	                menuContent = menuContent + "<div onclick = \x22" +  contentDetail.src + "\x22 class='" + params.classTableItem + "'>";
	                menuContent = menuContent +"<div class='"+ params.classTableItemIcon + "'>"+"<em style='color:"+contentDetail.color +";' class='" + contentDetail.icon + "  iconmenu_slide '></em></div><div class ='"+params.classTableItemText +"'>" + contentDetail.title + "</div></div>";
	            }    
        	  }	 //end haveString

            /*End ket thuc fix menu*/	
              else
              	{	
		            var k=1;
		            for (var j = 0; j < lengthArr; j++) {
		                var contentDetail = arrContent[j];
		                 
		                if (j  == (params.numberIteminLine*k)) {
		                   // menuContent = menuContent + "</div></table>" + "<table><div class=" + params.classTableRow + "' style='display:table; margin: 0 auto;'>";
		                     menuContent = menuContent + "</div></table>" + "<table><div class='" + params.classTableRow + "' >";
		                   k=k+1;
		                }
		                //menuContent = menuContent + "<div class=" + params.classTableItem + "' style='display: table-cell; margin: 0 auto;'>";
		                menuContent = menuContent + "<div onclick = \x22" +  contentDetail.src + "\x22 class='" + params.classTableItem + "'>";
		                menuContent = menuContent +"<div class='"+ params.classTableItemIcon + "'>"+"<em style='color:"+contentDetail.color +";' class='" + contentDetail.icon + "  iconmenu_slide '></em></div><div class ='"+params.classTableItemText +"'>" + contentDetail.title + "</div></div>";
		          	}
                }//end if      
            menuContent = menuContent + "</table></div>";

        }
        console.log(" menuContent  2 " + menuContent);
        menuHeader = menuHeader + menuContent;
        if(numberPage>1){
             menuHeader = menuHeader + "</div><div class='" + params.classSwiperPageinationHeader + "'></div></div>";
 //hieuth2
             menuHeader = menuHeader + "</div><div class='" + params.classSwiperPageinationHeader1 + "'></div></div>";
        }else{
             menuHeader = menuHeader + "</div></div>";
        }
       
        menu.htmlHeader = menuHeader;
      
        return menuHeader;
     }



    /* 
    menu.initHeader = function () {
        var listData = menu.headerContent;
        var length = listData.length;
        var menuHeader = "<div class = '" + params.classHeader + "'>   <div class='" + params.classWrapContent + "'>";
        var maxItemonPage = params.numberIteminLine * params.maxLinePageSlide;
        var numberPage = Math.floor(length / maxItemonPage);
        if ((length % maxItemonPage) > 0) {
            numberPage += 1;

        }
        var arrContent;
        var menuContent = "";

        for (var i = 0; i < numberPage; i++) {
            console.log("menuContent1" + menuContent);
            menuContent = menuContent + "<div class='" + params.classItemSlide + "'>";
            arrContent = new Array();
            arrContent = listData.slice((i * maxItemonPage), ((i * maxItemonPage) + maxItemonPage));
            var lengthArr = arrContent.length;
            //menuContent = menuContent + "<table><div class=" + params.classTableRow + "' style='display:table; margin: 0 auto;'>";
             menuContent = menuContent + "<table><div class='" + params.classTableRow + "'>";
            var k=1;
            for (var j = 0; j < lengthArr; j++) {
                var contentDetail = arrContent[j];
                 
                if (j  == (params.numberIteminLine*k)) {
                   // menuContent = menuContent + "</div></table>" + "<table><div class=" + params.classTableRow + "' style='display:table; margin: 0 auto;'>";
                     menuContent = menuContent + "</div></table>" + "<table><div class='" + params.classTableRow + "' >";
                   k=k+1;
                }
                //menuContent = menuContent + "<div class=" + params.classTableItem + "' style='display: table-cell; margin: 0 auto;'>";
                menuContent = menuContent + "<div onclick = \x22" +  contentDetail.src + "\x22 class='" + params.classTableItem + "'>";
                menuContent = menuContent +"<div class='"+ params.classTableItemIcon + "'>"+"<em style='color:"+contentDetail.color +";' class='" + contentDetail.icon + "  iconmenu_slide '></em></div><div class ='"+params.classTableItemText +"'>" + contentDetail.title + "</div></div>";
            }
            menuContent = menuContent + "</table></div>";

        }
        console.log(" menuContent  2 " + menuContent);
        menuHeader = menuHeader + menuContent;
        if(numberPage>1){
             menuHeader = menuHeader + "</div><div class='" + params.classSwiperPageinationHeader + "'></div></div>";
        }else{
             menuHeader = menuHeader + "</div></div>";
        }
       
        menu.htmlHeader = menuHeader;
      
        return menuHeader;
    } */
  
    menu.htmlFooter = "";
    menu.initFooter = function () {
        var listData = menu.footerContent;
        var length = listData.length;
        var menuFooter = "<div class = '" + params.classFooter + "'>   <div class='" + params.classWrapContent + "'>";
        var maxItemonPage = params.numberIteminLine * params.maxLinePageSlide;
        var numberPage = Math.floor(length / maxItemonPage);
        if ((length % maxItemonPage) > 0) {
            numberPage += 1;

        }
        var arrContent;
        var menuContent = "";

        for (var i = 0; i < numberPage; i++) {

            menuContent = menuContent + "<div class='" + params.classItemSlide + "'>";
            arrContent = new Array();
            arrContent = listData.slice((i * maxItemonPage), ((i * maxItemonPage) + maxItemonPage));
            var lengthArr = arrContent.length;
            //menuContent = menuContent + "<table><div class=" + params.classTableRow + "' style='display:table; margin: 0 auto;'>";
             menuContent = menuContent + "<table><div class='" + params.classTableRow + "'>";
            var k=1;
            for (var j = 0; j < lengthArr; j++) {
                var contentDetail = arrContent[j];
                
                if (j  == (params.numberIteminLine*k)) {
                    //menuContent = menuContent + "</div></table>" + "<table><div class=" + params.classTableRow + "' style='display:table; margin: 0 auto;'>";
                     menuContent = menuContent + "</div></table>" + "<table><div class='" + params.classTableRow + "'>";
                    k=k+1;
                } 
                //menuContent = menuContent + "<div class=" + params.classTableItem + "' style='display: table-cell; margin: 0 auto;'>";
                menuContent = menuContent + "<div onclick=\x22"  + contentDetail.src +"\x22 class='" + params.classTableItem + "'>";
                menuContent = menuContent +"<div class='"+ params.classTableItemIcon + "'>"+"<em style='color:"+contentDetail.color +";' class='" + contentDetail.icon + "  iconmenu_slide '></em></div><div class ='"+params.classTableItemText +"'>" + contentDetail.title + "</div></div>";
            }
            menuContent = menuContent + "</table></div>";

        }
        menuFooter = menuFooter + menuContent;
        if(numberPage>1){
             menuFooter = menuFooter + "</div><div class='" + params.classSwiperPageinationFooter + "'></div></div>";
        }else{
             menuFooter = menuFooter + "</div></div>";
        }
       
        menu.htmlFooter = menuFooter;
        
        return menuFooter;
    }
      menu.contentHTML = function(){
         return menu.initHeader()   + "<div id='menuslide_divider'></div>" +  menu.initFooter();
      } 
    
};