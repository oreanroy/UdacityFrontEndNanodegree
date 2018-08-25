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
            var button = `<button type="button" id="button${e}">button ${e}</button>`;
            data.button.push(button);
        }
        
        view.buttons();
    },
    buttons: function(){
        var allButton = $('button');
        for(e in data.button){
            allButton[e].addEventListener("click", (function(copy){
                return function(){copy.clicks+=1;
                var cat = copy;
                view.disp(cat);};
            })(data.objArr[e]));
        };
    },
    admin: function(){
        var admn = $('#activate');
        console.log(admn[0]);
        admn[0].addEventListener("click", function(){
            view.form();
        });
    },
    submit: function(){
        var sub = $('#sumit');
        console.log(sub);
        sub[0].addEventListener("click", function(){
            var name = ('#catname')[0].text();
            var flag =0;
            for(e in data.nameArr){
                if()
            }
        });
        var res = $('#reset');
        res[0].addEventListener("click", function(){
            data.button=[];
            octupus.create();
        });
    },
};

var view = {

    disp: function(cat){
        var image = `<img src=${cat.img} class="image"/>`;
        $('#cat').html('');
        $('#cat').append(image);
        var clicks = `<h1>you  have clicked this cat ${cat.clicks} times!!</h1>`;
        $('#number').html('');
        $('#number').append(clicks);
    },
    buttons: function(){
        var but = $('#buttons');
        but.html('');
        for(e in data.button){
            but.append(data.button[e]);
        };
    octupus.buttons();
    },
    form: function(){
        var form = $('#admin');
        var add = `<form id="form"> Name: <br>
                  <input id="catname" type="text" name="catname"><br>
                  <button type="button" id="submit">Submit</button>
                  <button type="button" id="reset">Reset</button>
                  </form>`;
        form.append(add);
        octupus.submit();
    },
};
var attach = $('#cat');
var image1 = `<img src=${data.imgArr[0]} class="image"/>`;
attach.append(image1);
octupus.create();
octupus.admin();
}());