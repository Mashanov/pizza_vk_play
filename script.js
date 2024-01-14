var ingredient = 1,
ingredients = {

    1: 'pepperoni',
    2: 'mushrooms',
    3: 'greenery',
    4: 'tomatoes',
    5: 'cucumber',
},
playerLvl = 0,
users = {

    0: [
        
        ['Привет, хочу соус и колбаски', ['соус', 'pepperoni']],
        ['Мне только пипперони', ['pepperoni']],
        ['Здравствуйте, мне бы вашу пиццу с фирменным соусом и нежной колабаской', ['соус', 'pepperoni']],
        ['Могу я попробовать пиццу с соусом и пипперони колбасой ?', ['соус', 'pepperoni']],
        ['У меня аллергия на соус, мне только колбасу', ['pepperoni']],
        ['Я не люблю пиццу, но вашу попробую, мне с колбаской', ['pepperoni']],
        ['Я давно не ел пиццу с соусом и пипперони', ['соус', 'pepperoni']],
        ['Соус и пипперони, без лишних слов', ['соус', 'pepperoni']],
        ['Удиви меня своей пиццей, добавляй любые ингредиенты', ['любая']],
        ['Я хочу пиццу, но не знаю что добавить, сделай на свое усмотрение', ['любая']],
        ['Срочно ! Сделай мне любую пиццу, я страшно хочу есть', ['любая']],
    ],

    1: [

        ['Сделай мне пиццу с пипперони и грибами', ['mushrooms', 'pepperoni']],
        ['Грибы, пипперони и соус, и побыстрее !', ['соус', 'mushrooms', 'pepperoni']],
        ['Одну грибную пиццу пожалуйста', ['mushrooms']],
        ['Грибочков с колбаской охото..', ['mushrooms', 'pepperoni']],
    ],

    2: [

        ['Пиццу с пипперони, грибами и зеленью', ['mushrooms', 'pepperoni', 'greenery']],
        ['Обожаю грибы и зелень', ['mushrooms', 'greenery']],
        ['А сделай как мне пиццу с колбаской и зеленью', ['pepperoni', 'greenery']],
        ['Обожаю пипперони, зелень и грибы', ['pepperoni', 'greenery', 'mushrooms']],
        ['Здравствуйте, хотелось бы великолепной пипперони, зелени добавь и соуса немного', ['pepperoni', 'greenery', 'соус']],
    ],

    3: [

        ['Помидорок бы мне и зелень', ['tomatoes', 'greenery']],
        ['Эй, здарова, мне томаты, зелень и пипперони', ['tomatoes', 'greenery', 'pepperoni']],
        ['Мне хотелось бы видеть в пицце помидоры и грибы', ['tomatoes', 'mushrooms']],
        ['Я из Италии, мне ваши лучшие помидорки и соус, мама мия', ['tomatoes', 'соус']],
        ['Мне кажется томаты, зелень и колбаска хорошо сочитаются в пицце', ['tomatoes', 'greenery', 'pepperoni']],
        ['Говорят ты хороший повар, сделай пиццу с помидорами и грибами', ['tomatoes', 'mushrooms']],
    ],

    4: [

        ['Огурчики, томаты и зелень, я опаздываю, давай поскорее дружище', ['cucumber', 'tomatoes', 'greenery']],
        ['Огурцы, помидоры и точка', ['cucumber', 'tomatoes']],
        ['Вот тебе большой заказ: соус, огурцы, помидоры, грибы, пипперони, запомнил ?', ['соус', 'cucumber', 'tomatoes', 'mushrooms', 'pepperoni']],
        ['Я люблю твою пиццу, добавляй все ингредиенты что у тебя есть !', ['соус', 'cucumber', 'tomatoes', 'mushrooms', 'pepperoni', 'greenery']],
    ],
},
user,
newUser,
voiceUser,
textRe,
iText = 1,
ordersMon = 0,
upgrade = 0,
orders = 0,
UserPrompt = false;

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

    document.querySelector('#user').style.backgroundImage = 'url(https://raw.githubusercontent.com/Mashanov/pizza/main/images/users/' + newUser + '.png)';
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('#user').style.bottom = '170px';

    if (UserPrompt == false) voiceUser = users[0][2];
    else {

        voiceUser = Math.random() * (playerLvl + 1) | 0;
        voiceUser = users[voiceUser][(Math.random() * users[voiceUser].length | 0)];
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

        if (document.querySelectorAll('#tableGame > div[style][class]').length > 6) result ('Выглядит здорово', 1);
        else result ('Мало ингредиентов', -1);

    } else {

        if (UserPrompt == false)
        {

            result ('Хорошая пицца', 1);
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

                    result ('Я просил соус, где он ?', -1);
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

                    if (element == 'pepperoni') result ('Я просил колбаску, где она ?', -1);
                    if (element == 'mushrooms') result ('Где мои грибочки, вы не положили', -1);
                    if (element == 'greenery') result ('Ты забыл про зелень !', -1);
                    if (element == 'tomatoes') result ('А где помидоры ?', -1);
                    if (element == 'cucumber') result ('Как ты мог забыть про огурцы..', -1);
                    break;

                } else if (i < 6){

                    if (element == 'pepperoni') result ('Мало пипперони', -1);
                    if (element == 'mushrooms') result ('Не хватает грибов', -1);
                    if (element == 'greenery') result ('Нужно больше зелени', -1);
                    if (element == 'tomatoes') result ('Огурчиков пожалел, не ожидал от тебя такого', -1);
                    break;	
                }
                }

                if (voiceUser[1].length == forElement) result ('Хорошая пицца', 1);
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
    document.querySelector('#moneyShopText').innerText = '$ ' + ordersMon;
    document.querySelector('#moneyBlock').innerHTML = '<mo style="color: rgb(32, 167, 32)">$ </mo>' + ordersMon;

    if (from == 'ingr')
    {

        if (numb == 4) elem.parentNode.parentNode.remove ();
        else elem.parentNode.remove ();

        playerLvl = numb;
        elem = document.querySelector('div.voiceIngredient[onclick="clickVoiceIngredient (' + (numb + 1) + ', this)"]');
        elem.style.opacity = 1;
        elem.style.pointerEvents = 'auto';

    } else {

        if (numb == 3) elem.parentNode.parentNode.remove ();
        else elem.parentNode.remove ();

        upgrade = numb;
    }

    if (!document.querySelector('shop div.section'))
        document.querySelector('shop').insertAdjacentHTML ('beforeend', '<div class="section"><div class="sectionName">Вы все купили</div></div>');
}

function nextArray ()
{

    if (document.querySelector('#pizza').style.background == '')
    {

        document.querySelector('#arrow').style.left = '110px';
        document.querySelector('#blockPrompt').innerText = 'Отлично, теперь выбери колбасу и разложи ее на пиццу';
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
