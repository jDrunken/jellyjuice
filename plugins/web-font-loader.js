import WebFont from 'webfontloader'

// custom: {
//     font:['Volte:n4,n5,n6,n7','volte'],
//     urls : ['../assets/styles/font.scss']
// },
console.log(WebFont)
WebFont.load({
    custom: {
        font:['Volte:n4,n5,n6,n7','volte'],
        urls : ['/font.css']
    },
    google: {
        families: [
            'Noto+Sans+KR:400,700'
        ]
    },
    timeout: 2000
})