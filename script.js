window.addEventListener('DOMContentLoaded',()=>{
    consttiles=Array.from(document.querySelectorAll('.tile'));
    constplayerDisplay=document.querySelector('.display-player');
    constresetButton=document.querySelector('#reset');
    constannouncer=document.querySelector('.announcer');

    letboard=['','','','','','','','',''];
    letcurrentPlayer='X';
    letisGameActive=true;

    constPLAYERX_WON='PLAYERX_WON';
    constPLAYERO_WON='PLAYERO_WON';
    constTIE='TIE';


    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    constwinningConditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    functionhandleResultValidation(){
        letroundWon=false;
        for(leti=0;i<=7;i++){
            constwinCondition=winningConditions[i];
            consta=board[winCondition[0]];
            constb=board[winCondition[1]];
            constc=board[winCondition[2]];
            if(a===''||b===''||c===''){
                continue;
            }
            if(a===b&&b===c){
                roundWon=true;
                break;
            }
        }

    if(roundWon){
            announce(currentPlayer==='X'? PLAYERX_WON: PLAYERO_WON);
            isGameActive=false;
            return;
        }

    if(!board.includes(''))
        announce(TIE);
    }

    constannounce=(type)=>{
        switch(type){
            casePLAYERO_WON:
                announcer.innerHTML='Player <span class="playerO">O</span> Won';
                break;
            casePLAYERX_WON:
                announcer.innerHTML='Player <span class="playerX">X</span> Won';
                break;
            caseTIE:
                announcer.innerText='Tie';
        }
        announcer.classList.remove('hide');
    };

    constisValidAction=(tile)=>{
        if(tile.innerText==='X'||tile.innerText==='O'){
            returnfalse;
        }

        returntrue;
    };

    constupdateBoard=(index)=>{
        board[index]=currentPlayer;
    }

    constchangePlayer=()=>{
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer=currentPlayer==='X'? 'O': 'X';
        playerDisplay.innerText=currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    constuserAction=(tile,index)=>{
        if(isValidAction(tile)&&isGameActive){
            tile.innerText=currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    constresetBoard=()=>{
        board=['','','','','','','','',''];
        isGameActive=true;
        announcer.classList.add('hide');

        if(currentPlayer==='O'){
            changePlayer();
        }

        tiles.forEach(tile=>{
            tile.innerText='';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach((tile,index)=>{
        tile.addEventListener('click',()=>userAction(tile,index));
    });

    resetButton.addEventListener('click',resetBoard);
});
