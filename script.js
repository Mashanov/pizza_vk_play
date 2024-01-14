var	plang = 'ru',
users,
lang = {

    ru: {

        1: 'Ресторан || пиццерия || кухня',
        2: 'Пиццерия',
        3: 'Играть',
        4: 'Магазин',
        5: 'Об игре',
        6: 'Рабочий день окончен',
        7: '$3 за просмотр рекламы',
        8: 'Ингредиенты',
        9: 'Улучшения',
        10: 'Грибочки для пиццы, многие их просто обожают',
        11: 'Зелень придаст пицце аромат и красивый внешний вид',
        12: 'Помидорки дадут вашей пицце легкую кислинку',
        13: 'Огурцы добавят свежести и неповторимый хруст',
        14: 'Поставить автомат с напитками. Каждую смену приносит дополнительно 3$',
        15: 'Купить рекламу по телевизору. Увеличит вашу прибыль с продажи пиццы',
        16: 'Нанять лучшего в городе поставщика продуктов. Увеличит вашу прибыль с продажи пиццы',
        17: `Что за игра ?<br><br>Пиццерия - экономическая игра, симулятор. Вы владелец небольшой пиццерии, к вам приходят гости и делают заказы на изготовление пиццы, ваша задача обслужить клиентов. За успешное выполнение заказа предусмотрено вознаграждение в виде игровой валюты. Игровую валюту вы можете потратить на покупку новых ингредиентов для пиццы или улучшения своего заведения.<hr><br>
        Как играть ?<br><br>Для игры необходимо нажать кнопку "Играть" в главном меню игры. Перед вами появится посетитель вашей пиццерии, прочитайте его заказ и нажмите кнопку "Ок", после чего перед вами появится кухонный стол с ингредиентами. Разложите необходимые ингредиенты как сказано в заказе и нажмите кнопку "В печь". Если вы ошиблись и положили не тот ингредиент или хотите начать делать пиццу заново, нажмите кнопку "В мусорку".<hr><br>`,
        18: 'В мусорку',
        19: 'В печь',
        20: 'Добавь соус в пиццу',
        21: 'Отлично, теперь выбери колбасу и разложи ее на пиццу',
        22: 'Вы все купили',
        23: 'Хорошая пицца',
        24: 'Привет, хочу соус и колбаски',
        25: 'Мне только пепперони',
        26: 'Здравствуйте, мне бы вашу пиццу с фирменным соусом и нежной колабаской',
        27: 'Могу я попробовать пиццу с соусом и пепперони колбасой ?',
        28: 'У меня аллергия на соус, мне только колбасу',
        29: 'Я не люблю пиццу, но вашу попробую, мне с колбаской',
        30: 'Я давно не ел пиццу с соусом и пепперони',
        31: 'Соус и пепперони, без лишних слов',
        32: 'Удиви меня своей пиццей, добавляй любые ингредиент',
        33: 'Я хочу пиццу, но не знаю что добавить, сделай на свое усмотрение',
        34: 'Срочно ! Сделай мне любую пиццу, я страшно хочу есть',
        35: 'Сделай мне пиццу с пепперони и грибами',
        36: 'Грибы, пепперони и соус, и побыстрее !',
        37: 'Одну грибную пиццу пожалуйста',
        38: 'Грибочков с колбаской охото..',
        39: 'Пиццу с пепперони, грибами и зеленью',
        40: 'Обожаю грибы и зелень',
        41: 'А сделай ка мне пиццу с колбаской и зеленью',
        42: 'Обожаю пепперони, зелень и грибы',
        43: 'Здравствуйте, хотелось бы великолепной пепперони, зелени добавь и соуса немного',
        44: 'Помидорок бы мне и зелень',
        45: 'Эй, здарова, мне томаты, зелень и пепперони',
        46: 'Мне хотелось бы видеть в пицце помидоры и грибы',
        47: 'Я из Италии, мне ваши лучшие помидорки и соус, мама мия',
        48: 'Мне кажется томаты, зелень и колбаска хорошо сочитаются в пицце',
        49: 'Говорят ты хороший повар, сделай пиццу с помидорами и грибами',
        50: 'Огурчики, томаты и зелень, я опаздываю, давай поскорее дружище',
        51: 'Огурцы, помидоры и точка',
        52: 'Вот тебе большой заказ: соус, огурцы, помидоры, грибы, пепперони, запомнил ?',
        53: 'Я люблю твою пиццу, добавляй все ингредиенты что у тебя есть !',
        54: 'Выглядит здорово',
        55: 'Мало ингредиентов',
        56: 'Я просил соус, где он ?',
        57: 'Я просил колбаску, где она ?',
        58: 'Где мои грибочки, вы не положили',
        59: 'Ты забыл про зелень !',
        60: 'А где помидоры ?',
        61: 'Как ты мог забыть про огурцы..',
        62: 'Мало пепперони',
        63: 'Не хватает грибов',
        64: 'Нужно больше зелени',
        65: 'Огурчиков пожалел, не ожидал от тебя такого'
    },

    en: {

        1: 'Restaurant || pizzeria || kitchen',
        2: 'Pizzeria',
        3: 'Play',
        4: 'Shop',
        5: 'About the game',
        6: 'Working day is over',
        7: '$3 per ad view',
        8: 'Ingredients',
        9: 'Improvements',
        10: 'Mushrooms for pizza, many simply adore them',
        11: 'Greens will give the pizza flavor and a beautiful appearance.',
        12: 'Tomatoes will give your pizza a slight acidity.',
        13: 'Cucumbers add freshness and a unique crunch',
        14: 'Put a vending machine with drinks. Each shift brings an additional $3',
        15: 'Buy advertising on TV. Increase your income from selling pizza',
        16: 'Hire the best grocery supplier in town. Increase your income from selling pizza',
        17: `What kind of game ?<br><br>Pizzeria - economic game, simulation. You are the owner of a small pizzeria, guests come to you and make orders for pizza, your task is to serve customers. For the successful completion of the order, a reward in the form of game currency is provided. You can use the game currency to buy new pizza ingredients or improve your establishment.<hr><br>
        How to play ?<br><br>To play, you must click the "Play" button in the main menu of the game. A visitor to your pizzeria will appear in front of you, read his order and click the "OK" button, after which a kitchen table with ingredients will appear in front of you. Arrange the necessary ingredients as indicated in the order and press the "Into the oven" button. If you made a mistake and put the wrong ingredient or want to start making pizza again, click the "Trash" button.<hr><br>`,
        18: 'In the trash',
        19: 'Into the oven',
        20: 'Add sauce to pizza',
        21: 'Great, now choose a sausage and spread it on a pizza',
        22: 'You bought everything',
        23: 'Good pizza',
        24: 'Hi, I want sauce and sausages',
        25: 'I just need pepperoni',
        26: 'Hello, I would like your pizza with special sauce and tender sausage',
        27: 'Can I try pizza with sauce and pepperoni sausage ?',
        28: 'I`m allergic to sauce, I only need sausage',
        29: 'I don`t like pizza, but I`ll try yours, for me with sausage',
        30: 'I haven`t had pizza with sauce and pepperoni in a long time.',
        31: 'Sauce and pepperoni, without further ado',
        32: 'Surprise me with your pizza, add any ingredient',
        33: 'I want pizza, but I don`t know what to add, do it on your own',
        34: 'Urgently ! Make me any pizza, I`m terribly hungry',
        35: 'Make me a pizza with pepperoni and mushrooms',
        36: 'Mushrooms, pepperoni and sauce, and hurry!',
        37: 'One mushroom pizza please',
        38: 'Mushrooms with sausage hunting..',
        39: 'Pepperoni pizza with mushrooms and herbs',
        40: 'I love mushrooms and herbs',
        41: 'And make me a pizza with sausage and greens',
        42: 'I love pepperoni, herbs and mushrooms',
        43: 'Hello, I would like a great pepperoni, add greens and a little sauce',
        44: 'I would like a tomato and greens',
        45: 'Hey, hello, I need tomatoes, herbs and pepperoni',
        46: 'I would like to see tomatoes and mushrooms in pizza',
        47: 'I`m from Italy, I need your best tomatoes and sauce, mamma mia',
        48: 'It seems to me that tomatoes, herbs and sausage go well together in pizza',
        49: 'They say you`re a good cook, make pizza with tomatoes and mushrooms',
        50: 'Cucumbers, tomatoes and greens, I`m late, hurry up buddy',
        51: 'Cucumbers, tomatoes and dot',
        52: 'Here`s a big order for you: sauce, cucumbers, tomatoes, mushrooms, pepperoni, remember ?',
        53: 'I love your pizza, add all the ingredients you have!',
        54: 'Looks great',
        55: 'Few ingredients',
        56: 'I asked for sauce, where is it ?',
        57: 'I asked for sausage, where is it ?',
        58: 'Where are my mushrooms, you didn`t put',
        59: 'You forgot the greens !',
        60: 'Where are the tomatoes ?',
        61: 'How could you forget about cucumbers..',
        62: 'Few pepperoni',
        63: 'Not enough mushrooms',
        64: 'Need more greenery',
        65: 'Ogurchikov regretted, did not expect this from you'
    },
},
player,

ingredient = 1,
ingredients = {

    1: 'pepperoni',
    2: 'mushrooms',
    3: 'greenery',
    4: 'tomatoes',
    5: 'cucumber',
},
playerLvl = 0,
user,
newUser,
voiceUser,
textRe,
iText = 1,
ordersMon = 0,
upgrade = 0,
orders = 0,
userSave = [0, 0, 0],
UserPrompt = false;

if (localStorage.getItem('game') != null){

    userSave = JSON.parse( localStorage.getItem('game') );
    
    UserPrompt = true;
    document.querySelector('#arrow').remove();
    document.querySelector('#backgroundPrompt').remove();
    document.querySelectorAll('.downBotton')[1].style.zIndex = 'auto';
    document.querySelector('.voiceIngredient').style.opacity = 1;
    document.querySelector('.voiceIngredient').style.pointerEvents = 'auto';
    document.querySelector('.voiceIngredientTrue').style.opacity = 1;
    document.querySelector('.voiceIngredientTrue').style.pointerEvents = 'auto';
    document.querySelector('.voiceIngredient[onclick="document.querySelector(\'#sheese\').style.opacity = 0.5"]').style.opacity = 1;
    document.querySelector('.voiceIngredient[onclick="document.querySelector(\'#sheese\').style.opacity = 0.5"]').style.pointerEvents = 'auto';

    ordersMon = userSave[0];
    playerLvl = userSave[1];
    upgrade = userSave[2];

    document.querySelector('#moneyShopText').innerText = '$ ' + ordersMon;
    document.querySelector('#moneyBlock').innerHTML = '<mo style="color: rgb(32, 167, 32)">$ </mo>' + ordersMon;

    for ( var i = 0; i < userSave[1]; i++ )
    {

        document.querySelectorAll('.section')[0].querySelector('.blockBuy').remove();
        var elem = document.querySelector('div.voiceIngredient[onclick="clickVoiceIngredient (' + (i + 2) + ', this)"]');
        elem.style.opacity = 1;
        elem.style.pointerEvents = 'auto';
    }

    for ( var i = 0; i < userSave[2]; i++ )
    {

        document.querySelectorAll('.section')[1].querySelector('.blockBuy').remove();
    }

    if (!document.querySelector('shop div.section'))
        document.querySelector('shop').insertAdjacentHTML ('beforeend', '<div class="section"><div class="sectionName">' + lang[plang][22] + '</div></div>');
}

document.querySelector('title').innerHTML = lang[plang][1];
document.querySelector('#menuName').innerHTML = lang[plang][2];
document.querySelector('div[onclick="gameStart ()"]').innerHTML = lang[plang][3];
document.querySelector(`div[onclick="document.querySelector('shop').style.left = 0"]`).innerHTML = lang[plang][4];
document.querySelectorAll('div.NameSection')[0].innerHTML = lang[plang][4];
document.querySelector('div.textMenuSection').innerHTML = lang[plang][5];
document.querySelectorAll('div.NameSection')[1].innerHTML = lang[plang][5];
document.querySelector('#blockPause').innerHTML = lang[plang][6];
document.querySelector('#adsMoney').innerHTML = lang[plang][7];
document.querySelectorAll('.sectionName')[0].innerHTML = lang[plang][8];
document.querySelectorAll('.sectionName')[1].innerHTML = lang[plang][9];
document.querySelectorAll('.textBuy')[0].innerHTML = lang[plang][10];
document.querySelectorAll('.textBuy')[1].innerHTML = lang[plang][11];
document.querySelectorAll('.textBuy')[2].innerHTML = lang[plang][12];
document.querySelectorAll('.textBuy')[3].innerHTML = lang[plang][13];
document.querySelectorAll('.textBuy')[4].innerHTML = lang[plang][14];
document.querySelectorAll('.textBuy')[5].innerHTML = lang[plang][15];
document.querySelectorAll('.textBuy')[6].innerHTML = lang[plang][16];
document.querySelector('.aboutText').innerHTML = lang[plang][17];
document.querySelector('*[onclick="deletePizza ()"]').innerHTML = lang[plang][18];
document.querySelector('*[onclick="pizzaReady ()"]').innerHTML = lang[plang][19];
document.querySelector('#blockPrompt').innerHTML = lang[plang][20];

users = {

0: [
    
    [lang[plang]['24'], ['соус', 'pepperoni']],
    [lang[plang]['25'], ['pepperoni']],
    [lang[plang]['26'], ['соус', 'pepperoni']],
    [lang[plang]['27'], ['соус', 'pepperoni']],
    [lang[plang]['28'], ['pepperoni']],
    [lang[plang]['29'], ['pepperoni']],
    [lang[plang]['30'], ['соус', 'pepperoni']],
    [lang[plang]['31'], ['соус', 'pepperoni']],
    [lang[plang]['32'], ['любая']],
    [lang[plang]['33'], ['любая']],
    [lang[plang]['34'], ['любая']],
],

1: [

    [lang[plang]['35'], ['mushrooms', 'pepperoni']],
    [lang[plang]['36'], ['соус', 'mushrooms', 'pepperoni']],
    [lang[plang]['37'], ['mushrooms']],
    [lang[plang]['38'], ['mushrooms', 'pepperoni']],
],

2: [

    [lang[plang]['39'], ['mushrooms', 'pepperoni', 'greenery']],
    [lang[plang]['40'], ['mushrooms', 'greenery']],
    [lang[plang]['41'], ['pepperoni', 'greenery']],
    [lang[plang]['42'], ['pepperoni', 'greenery', 'mushrooms']],
    [lang[plang]['43'], ['pepperoni', 'greenery', 'соус']],
],

3: [

    [lang[plang]['44'], ['tomatoes', 'greenery']],
    [lang[plang]['45'], ['tomatoes', 'greenery', 'pepperoni']],
    [lang[plang]['46'], ['tomatoes', 'mushrooms']],
    [lang[plang]['47'], ['tomatoes', 'соус']],
    [lang[plang]['48'], ['tomatoes', 'greenery', 'pepperoni']],
    [lang[plang]['49'], ['tomatoes', 'mushrooms']],
],

4: [

    [lang[plang]['50'], ['cucumber', 'tomatoes', 'greenery']],
    [lang[plang]['51'], ['cucumber', 'tomatoes']],
    [lang[plang]['52'], ['соус', 'cucumber', 'tomatoes', 'mushrooms', 'pepperoni']],
    [lang[plang]['53'], ['соус', 'cucumber', 'tomatoes', 'mushrooms', 'pepperoni', 'greenery']],
],
}

function textRead ()
{

    document.querySelector('#message').innerText = textRe.substr(0, iText);
    if (textRe.length > iText)
    {
        iText++;
        setTimeout(textRead, 50);

    } else iText = 1;
}

function clickVoiceIngredient (from, elementHT)
{

    ingredient = from;
    document.querySelector('div.voiceIngredientTrue').className = 'voiceIngredient';
    elementHT.className = 'voiceIngredient voiceIngredientTrue';
}

function save ()
{

    localStorage.setItem('game', JSON.stringify(userSave));
}

setInterval(save, 10000);

function clickPizza ()
{

    if (UserPrompt == false)
    {

        if (document.querySelectorAll('#tableGame > div[style][class]').length >= 7)
        {

            document.querySelector('#CuttingBoard').removeAttribute('style');
            document.querySelector('#stPepper').remove();
            document.querySelector('#backgroundPrompt').style.zIndex = 1;
            document.querySelectorAll('.downBotton')[1].style.zIndex = 2;
            document.querySelector('#arrow').style.bottom = '60px';
            document.querySelector('#arrow').style.left = 'calc(75% - 40px)';
        }
    }

    document.querySelector('#tableGame').insertAdjacentHTML ('beforeend', '<div class="' + ingredients[ingredient] + '" style="left: ' + (self.event.pageX - 15) + 'px;top: ' + (self.event.pageY - 15) + 'px;transform: rotate(' + (Math.random () * 360 | 0) + 'deg)"></div>');
}

function deletePizza ()
{

    if (document.querySelector('#sheese[style]')) document.querySelector('#sheese[style]').removeAttribute('style');
    if (document.querySelector('#pizza[style]')) document.querySelector('#pizza[style]').removeAttribute('style');
    for (var element of document.querySelectorAll('#tableGame > div[style][class]'))
    {

        element.remove ();
    }
}

function gameStart ()
{

    while (newUser == user) newUser = (Math.random () * 10 | 0 + 1);
    user = newUser;

    document.querySelector('#user').style.backgroundImage = 'url(images/users/' + newUser + '.png)';
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('#user').style.bottom = '170px';

    if (UserPrompt == false) voiceUser = users[0][2];
    else {

        voiceUser = Math.random() * (playerLvl + 1) | 0;
        var randvoice = (Math.random() * users[voiceUser].length | 0);
        voiceUser = users[voiceUser][randvoice];
    }

    textRe = voiceUser[0];
    textRead ();
    document.querySelector('#ok').style.display = 'block';
}

function pizzaReady ()
{

    document.querySelector('#tableGame').style.display = 'none';

    if (voiceUser[1][0] == 'любая')
    {

        if (document.querySelectorAll('#tableGame > div[style][class]').length > 6) result (lang[plang][54], 1);
        else result (lang[plang][55], -1);

    } else {

        if (UserPrompt == false)
        {

            result (lang[plang][23], 1);
            document.querySelector('#arrow').remove();
            document.querySelector('#backgroundPrompt').remove();
            document.querySelectorAll('.downBotton')[1].style.zIndex = 'auto';
            document.querySelector('.voiceIngredient').style.opacity = 1;
            document.querySelector('.voiceIngredient').style.pointerEvents = 'auto';
            document.querySelector('.voiceIngredient[onclick="document.querySelector(\'#sheese\').style.opacity = 0.5"]').style.opacity = 1;
            document.querySelector('.voiceIngredient[onclick="document.querySelector(\'#sheese\').style.opacity = 0.5"]').style.pointerEvents = 'auto';

            UserPrompt = true;
            return null;
        }

        var forElement = 0;
        for (var element of voiceUser[1])
        {

            forElement++;

                if (element == 'соус')
                {

                if (document.querySelector('#pizza').style.background == '')
                {

                    result (lang[plang][56], -1);
                    break;
                }

                } else {

                var i = 0;
                for (var n of document.querySelectorAll('#tableGame > div[style][class]'))
                {

                    if (n.className == element) i++;
                }

                if (i == 0)
                {

                    if (element == 'pepperoni') result (lang[plang][57], -1);
                    if (element == 'mushrooms') result (lang[plang][58], -1);
                    if (element == 'greenery') result (lang[plang][59], -1);
                    if (element == 'tomatoes') result (lang[plang][60], -1);
                    if (element == 'cucumber') result (lang[plang][61], -1);
                    break;

                } else if (i < 6){

                    if (element == 'pepperoni') result (lang[plang][62], -1);
                    if (element == 'mushrooms') result (lang[plang][63], -1);
                    if (element == 'greenery') result (lang[plang][64], -1);
                    if (element == 'tomatoes') result (lang[plang][65], -1);
                    break;	
                }
                }

                if (voiceUser[1].length == forElement) result (lang[plang][23], 1);
        }
    }
}

function result (text, money)
{

    orders++;
    textRe = text;
    textRead ();

    if (orders >= 3)
    {
        setTimeout( function ()
        {

            if (upgrade !== 0)
            {

                ordersMon += 3;
                document.querySelector('#moneyShopText').innerText = '$ ' + ordersMon;
                document.querySelector('#moneyBlock').innerHTML = '<mo style="color: rgb(32, 167, 32)">$ </mo>' + ordersMon;
            }

            orders = 0;
            document.querySelector('#backgroundPause').style.display = 'block';
            document.querySelector('#menu').style.display = 'block';
            document.querySelector('#user').style.bottom = 0;

            var externalApi = null;
            var callbacks = {
                appid: 32855,
        
                adsCallback: function(context) {},
            }
        
            function error(err) {
                throw new Error('Could not init external api ' + err);
            }
        
            function connected(api) {
                externalApi = api;
                externalApi.showAds({
                    interstitial: true
                });
            }
        
            iframeApi(callbacks).then(connected, error);

        }, 2000);

    } else {

        setTimeout(function (){document.querySelector('#user').style.bottom = '-100px'}, 1000);
        setTimeout(gameStart, 2000);
    }

    deletePizza ();
    if (money > 0 && upgrade == 2) money = 1.2;
    else if (money > 0 && upgrade == 3) money = 1.5;

    ordersMon = ordersMon + money;
    userSave[0] = ordersMon;

    document.querySelector('#moneyShopText').innerText = '$ ' + ordersMon;
    document.querySelector('#moneyBlock').innerHTML = '<mo style="color: rgb(32, 167, 32)">$ </mo>' + ordersMon;
    document.querySelector('#notification').innerText = '$' + money;
    document.querySelector('#notification').style.opacity = 1;
    document.querySelector('#notification').style.top = '50px';

    if (money > 0) document.querySelector('#notification').style.color = '#1cbd20';
    else document.querySelector('#notification').style.color = '#d75151';

    setTimeout(function (){document.querySelector('#notification').style.opacity = 0}, 1000);
    setTimeout(function (){document.querySelector('#notification').removeAttribute('style')}, 1500);
}

function buy (from, numb, howMath, elem)
{

    if (ordersMon < howMath) return null;

    if (from == 'ingr' && (playerLvl + 1) !== numb) return null;
    if (from == 'upgr' && (upgrade + 1) !== numb) return null;

    ordersMon -= howMath;
    userSave[0] = ordersMon;

    document.querySelector('#moneyShopText').innerText = '$ ' + ordersMon;
    document.querySelector('#moneyBlock').innerHTML = '<mo style="color: rgb(32, 167, 32)">$ </mo>' + ordersMon;

    if (from == 'ingr')
    {

        if (numb == 4) elem.parentNode.parentNode.remove ();
        else elem.parentNode.remove ();

        playerLvl = numb;
        userSave[1] = playerLvl;

        elem = document.querySelector('div.voiceIngredient[onclick="clickVoiceIngredient (' + (numb + 1) + ', this)"]');
        elem.style.opacity = 1;
        elem.style.pointerEvents = 'auto';

    } else {

        if (numb == 3) elem.parentNode.parentNode.remove ();
        else elem.parentNode.remove ();

        upgrade = numb;
        userSave[2] = upgrade;
    }

    if (!document.querySelector('shop div.section'))
        document.querySelector('shop').insertAdjacentHTML ('beforeend', '<div class="section"><div class="sectionName">' + lang[plang][22] + '</div></div>');
}

function nextArray ()
{

    if (document.querySelector('#pizza').style.background == '')
    {

        document.querySelector('#arrow').style.left = '110px';
        document.querySelector('#blockPrompt').innerText = lang[plang][21];
        document.querySelector('.voiceIngredientTrue').style.opacity = 1;
        document.querySelector('.voiceIngredientTrue').style.pointerEvents = 'auto';
        document.querySelector('.voiceIngredient').style.opacity = 0.2;
        document.querySelector('.voiceIngredient').style.pointerEvents = 'none';

    } else {

        document.querySelector('#blockPrompt').remove();
        document.querySelector('#CuttingBoard').style.zIndex = 1;
        document.querySelector('#ingredients').style.zIndex = 0;
        
        document.querySelector('body').insertAdjacentHTML ('beforeend', '<style id="stPepper">.pepperoni {z-index: 1}</style>');

        document.querySelector('#arrow').style.transform = 'initial';
        document.querySelector('#arrow').style.left = 'calc(50% - 40px)';
        document.querySelector('#arrow').style.top = 'auto';
        document.querySelector('#arrow').style.bottom = '250px';
    }
}

function adsRewardYa () {

    var externalApi = null;
    var callbacks = {
        appid: 32855,

        adsCallback: function(context) {

            if (context.type == "adCompleted"){

                ordersMon += 3;
                userSave[0] = ordersMon;

                document.querySelector('#moneyShopText').innerText = '$ ' + ordersMon;
                document.querySelector('#moneyBlock').innerHTML = '<mo style=\'color: rgb(32, 167, 32)\'>$ </mo>' + ordersMon;
            }
        },
    }

    function error(err) {
        throw new Error('Could not init external api ' + err);
    }

    function connected(api) {
        externalApi = api;
        externalApi.showAds({
            interstitial: false
        });
    }

    iframeApi(callbacks).then(connected, error);
}