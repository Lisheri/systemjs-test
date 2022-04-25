// 在此处使用rxjs中的ReplaySubject
// ReplaySubject会广播历史消息
// 假如当前处React应用当中, 在这个应用中发送了一个广播, 我们希望这个广播消息, 可以在vue中被监听
// 如果使用普通的subject, 切换到Vue应用中时, 这个广播已经结束了, Vue应用接收不到这个消息
// 因此需要使用ReplaySubject, 用于广播历史消息, 让切换到Vue项目时, 可以接收到被React发送的消息

import { ReplaySubject } from 'rxjs';

// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}



export function sayHello(who) {
  console.info(`%c${who} say hello`, "color:skyblue");
}

export const sharedSubject = new ReplaySubject();
