import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import { Design, Injector } from "typesafe-di";

const toggleMachine = Machine(
  {
    id: "useCount5",
    initial: "active",
    context: {
      cnt: 5
    },
    states: {
      done: {
        type: "final"
      },
      active: {
        entry: "init",
        on: {
          SET5: {
            actions: ctx => {
              ctx.cnt = 5;
            },
            cond: ctx => ctx.cnt !== 5
          },
          INCREMENT: {
            actions: ctx => ctx.cnt++,
            cond: ctx => ctx.cnt < 8
          },
          DECREMENT: {
            actions: ctx => ctx.cnt--,
            cond: ctx => ctx.cnt > 0
          },
          SET0: {
            actions: ctx => (ctx.cnt = 0),
            cond: ctx => ctx.cnt !== 0,
            target: "reseted"
          },
          GOGO: {
            target: "done"
          },
          GOGO2: {
            target: "done"
          }
        }
      },
      reseted: {
        // 入
        entry: () => console.log("ii"),
        // 出
        exit: () => console.log("ff"),
        on: {
          SET5: {
            actions: ctx => (ctx.cnt = 5),
            target: "active"
          }
        }
      }
    }
  }
  // {
  //   actions: {
  //     /* ... */
  //   },
  //   activities: {
  //     /* ... */
  //   },
  //   guards: {
  //     /* ... */
  //   },
  //   services: {
  //     /* ... */
  //   }
  // }
);

export const useCount5 = () => {
  const toggleMachine2 = toggleMachine.withContext({ cnt: 2 }).withConfig({
    actions: {
      init: () => console.log("プレイボール")
    }
  });

  // const { initialState } = toggleMachine2;
  // console.log(initialState.toStrings());
  // console.log(state.matches("SET5"));

  // const x = toggleMachine2.transition(initialState, "GOGO");
  // console.log(x);
  const [current, send] = useMachine(toggleMachine2);
  return { current, send };
};

// TODO
// 次に取れる状態 Buttonの制御に
// exit: "notify2"引数
// cond が ビジュアライズだとつらいので 別の方法
// test
