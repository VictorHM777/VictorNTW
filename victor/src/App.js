      import React from 'react'
      import './App.css'
      import Logo from './componentes/img/tenchu.jpg'
      import img from './componentes/img/download.png'
      import Header from './componentes/header'
      import Corpo from './componentes/corpo'
      import Dados from './componentes/dados'
      import Teste from './componentes/teste'
      import Rodape from './componentes/rodape'

      export default function App () {

            const v3 = () => {
                  return ('CUSTOS')
            }
            const v1 = 'v1'
            const v2 = 'v2'
            const emp = 'ntw'
            let ano = '2022'
            const copy = 'direitos reservados'
            const soma = (s1,s2) => {
                return  s1+s2
            }
         
    return (
          <>  
          {/* <img src= {Logo} style={{ width: 300}} />
          <p>{'canal : ' + v1 + v3()}</p>
          <h1>Canal : {v2 + v3()}</h1>
          <h2>{v3()}</h2>
          <img src={img} style={{width: 300}} />
          <Header/>
          <Corpo/>
            <Dados 
                  canal='abc' 
                  youtube='' 
                  curso=''
                  somar={soma}
            />
            <Teste/>
            
            
            <Rodape
              empresa= {emp}
              ano= {ano}
              copyrigth= {copy}        
            /> */}

            

          </>
           )
      }
