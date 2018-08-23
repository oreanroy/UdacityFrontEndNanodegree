$(function(){
var data = {
    cat: function(name, img, clicks) {
        this.name = name;
        this.img = img;
        this.clicks = clicks;
    },
    nameArr: ["cat1","cat2","cat3","cat4","cat5"],
    imgArr: ["https://r.hswstatic.com/w_907/gif/tesla-cat.jpg", 
    "https://awol.junkee.com/wp-content/uploads/2015/09/grumpy.jpg", 
    "https://steemitimages.com/DQmP4zKBTWSwY6zLrZ5kczha5PtdBs5afQhdgvYCuhd8bx6/4.jpg",
    "https://i.ytimg.com/vi/gL1Wy4pzySg/maxresdefault.jpg", 
    "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"],
    objArr: [],
    button: [],
};

var octupus = {
    create: function(){
        for(e in data.nameArr){
            var name = data.nameArr[e];
            var url = data.imgArr[e];
            var obj = new data.cat(name, url, 0);
            data.objArr.push(obj);
            var buton = $(document.createElement('button'));
           // buton.attr('id', `button${e}`);
            //buton.attr('type', 'button');
            //buton.text(`button ${e}`);
            var button = `<button type="button" id="button${e}">button ${e}</button>`;
            data.button.push(button);
        }
        view.buttons();
    },
    buttons: function(){
        var allButton = $('button');
        for(e in data.objArr){
            console.log(allButton[e]);
            allButton[e].addEventListener("click", function(){
               console.log(`${data.objArr[e]} was clicked.`);
                data.objArr[e].clicks+=1;
                var cat = data.objArr[e];
                view.disp(cat);
            });
        };
    },
};

var view = {

    disp: function(cat){
        var image = `<img src=${cat.img} class="image"/>`;
        $('#cat').html('');
        $('#cat').append(image);
        var clicks = `<h1>you  have clicked this cat ${cat.clicks} times!!</h1>`;
        $('#number').append(clicks);
    },
    buttons: function(){
        for(e in data.button){
            var but = $('#buttons');
            but.append(data.button[e]);
        };
    octupus.buttons();
    },
};
var attach = $('#cat');
var image1 = `<img src=${data.imgArr[0]} class="image"/>`;
attach.append(image1);
octupus.create();
}());