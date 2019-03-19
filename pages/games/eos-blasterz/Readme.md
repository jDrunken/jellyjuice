## Unity3d webgl 넣는법
프로젝트 루트 디렉토리 밑의 static 디렉토리 밑에 eos-blasterz 디렉토리에 게임사에서 받은 파일들을 넣는다.  
페이지 파일에서 헤드 부분의 오버라이딩을 요청한다.  
```
head: {
    script: [
        { src: '/eos-blasterz/Build/UnityLoader.js' },
        { src: 'https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-core.min.js' },
        { src: 'https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs.min.js' },
        { src: '/eos-blasterz/Plugin/ScatterPlugin.js' },
        { 
            src: 'https://cdn.jsdelivr.net/npm/eosjs@16.0.8/lib/eos.min.js',
            integrity: 'sha512-zhPSKFEBlDVvUzjl9aBS66cI8tDYoLetynuKvIekHT8NZZ12oxwcZ//M/eT/2Rb/pR/cjFvLD8104Cy//sdEnA==',
            crossorigin: 'anonymous'
        }
    ]    
},
```
/eos-blasterz 밑의 파일들은 static 디렉토리 밑에 있어야하고 다른 서버에서 받아오는 파일들은 게임사에서 주는 index.html을 보고 적절히 설정한다.  
그리고 나서
```
// 스캐터가 gameInstance 변수를 전역적으로 사용함...
window.gameInstance = UnityLoader.instantiate("gameContainer", "/eos-blasterz/Build/EOS_BLASTERZ.json")
// override inline style
window.gameInstance.container.style.margin = 'auto'
```
위와 같은 방법으로 mounted에서 초기화한다.  
gameInstance라는 고정된 변수명을 스캐터에서 사용하는 것으로 보인다.
유니티로더에서 컨테이너의 스타일을 임의로 수정하는데 margin을 0으로 만들어 버리기 때문에  
초기화 이후에 다시 바꿔줘야 가로 정렬이 된다.  

## Caution
게임사에서 주는 파일 중 TemplateData 밑에 style.css 파일이 있는데 이건 실제 사용되지 않는듯 하고  
헤드에 포함시키면 저 css에 있는 정의때문에 레이아웃이 깨질 수 있으니 사용하지 않는게 좋아보임...  
