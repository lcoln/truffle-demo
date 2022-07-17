/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-04-22 22:56:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-15 20:38:44
 */
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import styles from './index.module.css'
import Layout from "@/components/layout";
import Performance from './components/performance'
import Transactions from './components/transactions'
import webUtils from '@/utils/web-utils';
import balance from '@/context/overview';
import { useAtom } from "jotai";
import { account } from '@/context/common';
import { useRouter } from 'next/router'

interface listItem {
  title: string,
  content: NextPage
}
const list: listItem[] = [{
  title: 'Performance',
  content: Performance
}, {
  title: 'Transactions',
  content: Transactions
}]
const CssDoodle = ({ body }: {body: string}) => {
  const dangerousInnerHtml = { __html: body };
  return (
    <div
      className="css-doodle-wrapper"
      style={{minHeight: 500}}
      dangerouslySetInnerHTML={dangerousInnerHtml}
    />
  );
};
const makeDoodle = () => {
  return `
    <css-doodle>
      :doodle {
        flex: none;
        @grid: 1x24;
        @size: 100% 500px;
      }
      --transform: scale(@r(.8, 1.2)) translateX(@r(-200%, 200%)) translateY(@r(-5%, 35%));
      z-index: 2;
      color: @pn(#fff, #8b4480, #f9d51e, #36a47b, #7db13c, #ea695c, #0059b2, #74a9c3);
      transform-origin: 50% 100%;
      transform: var(--transform);

      ::before {
        position: absolute;
        bottom: 38vmin;
        left: -2vmin;
        content: "✿";
        font-size: 15vmin;
        -webkit-text-stroke: .4vmin;
      }
      ::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "(";
        font-size: 20vmin;
        transform: rotate(60deg) skew(60deg) scale(1.2, 1.8);
      }

      @random {
        ::after {
          content: ")";
          left: 1.7vmin;
          bottom: -3vmin;
        }
      }

      @nth(5, 10, 15, 20, 24) {
        z-index: 1;
        color: #fff;
      }

      @nth(1, 3, 9, 16, 19) {
        ::after {
          bottom: 0;
          left: 0;
          content: "(";
        }

        animation: swingLeft @r(1.5, 3)s ease infinite alternate both;

        ::before {
          animation: beforeLeft @lr()s ease infinite alternate both;
        }
      }

      @nth(5, 7, 15, 18, 23) {
        ::after {
          content: ")";
          left: 1.7vmin;
          bottom: -3vmin;
        }
        animation: swing @r(1.5, 3)s ease infinite alternate both;

        ::before {
          animation: before @lr()s ease infinite alternate both;
        }
      }

      @keyframes swingLeft {
        0% {
          transform: var(--transform) rotate(0deg);
        }
        100% {
          transform: var(--transform) rotate(7deg);
        }
      }

      @keyframes beforeLeft {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(7deg);
        }
      }

      @keyframes swing {
        0% {
          transform: var(--transform) rotate(0deg);
        }
        100% {
          transform: var(--transform) rotate(-7deg);
        }
      }

      @keyframes before {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-7deg);
        }
      }
      </css-doodle>
      <css-doodle>
      :doodle {
        flex: none;
        @grid: 1x5;
        @size: 100% 500px;
        position: absolute;
      }
      position: fixed;
      top: 100%;
      left: @r(20, 80)%;
      color: @pn(#fff, #8b4480, #f9d51e, #36a47b, #7db13c, #ea695c, #0059b2, #74a9c3);

      ::before {
        content: "✿";
        font-size: @r(5vmin, 10vmin);
        animation-direction: @p(reverse, initial);
        animation: before @p(2, 3)s linear both infinite @r(0, 6s);
      }
      animation: move @lp()s linear both infinite @lr();
      animation-direction: @p(reverse, initial);

      @keyframes move {
        0% {
          transform: translateX(-@r(-300%, 600%));
        }

        100% {
          transform: translateX(@r(300%, 600%));
        }
      }

      @keyframes before {
        0% {
          transform: translateY(0%) rotate(0deg);
        }

        40% {
          transform: translateY(-55vmin) rotate(-800deg);
        }

        50% {
          transform: translateY(-60vmin) rotate(-1000deg);
        }

        60% {
          transform: translateY(-55vmin) rotate(-1200deg);
        }

        100% {
          transform: translateY(0%) rotate(-2000deg);
        }
      }
    </css-doodle>
  `
}

const Overview: NextPage = (props) => {
  const router = useRouter()
  const [item, setItem] = useState<listItem>(list[0]);
  const [myBlance, setBalance] = useAtom(balance);
  const [myAccount] = useAtom(account);
  
  useEffect(() => {
    async function fetchData(){
      if (myAccount) {
        const balance = await webUtils.getBalance(myAccount);
        setBalance(balance);
      }
      await webUtils.getContract()
      const accounts = await webUtils.getAccounts()
      console.log({accounts})
    }
    // fetchData()
  }, [myAccount])

  return (
    <Layout>
      <div className={styles.container}>
        <div className="block">
          { myBlance || '' }
        </div>

        <div className="block">
          {
            list.map((_item, key) => (
              <div className={
                `inline-block mr-8 ${_item.title === item?.title ? 'border-b-2' : ''}`
              }  key={key} onClick={() => {setItem(_item)}}>
                {_item.title}
              </div>
            ))
          }
        </div>
        {/* <CssDoodle body={makeDoodle()} /> */}
        
        <item.content />
      </div>
    </Layout>
  )
}


export default Overview
