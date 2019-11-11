# 概念
> Flux是由Facebook官方提出的一套前端应用架构模式。它的核心概念是单向数据流。它不是具体的框架，而更像是一种软件开发模式。
* 前端应用架构模式
* 核心概念是单向数据流
* 软件开发模式

#
1、Action，它是用来描述一个行为的对象，每个action里都包含了某个行为的相关信息。比如， {actionName: 'CREATE_POST', data: {'content': 'new stuff'}}

2、Dispatcher，它是一个信息分发中心，它是action和store的连接中心。它可以使用dispatch方法执行一个action，并且可以用register方法注册回调，在回调中处理store中的数据。

3、Store，它是数据操作的唯一地方，当数据发生变化时，它可以使用emit方法向其它地方发送名为'change'的广播，告知它们store已经发生了变化。

4、View，视图层监听了'change'事件，一旦change事件被触发，视图层就会调用setState方法来更新相应的UI State。
