<center><h1>智能问答</h1></center>

<center><img src="projects/projectDetail4/nlp-qa.webp" width=400px /></center>

<center><h2>一、什么是智能回答</h2></center>

<b>智能问答（Questing Answering，QA）</b>旨在自动回答用户以自然语言方式提出的各类问题。自1950年图灵测试（Turing Test）提出以来，以自然语言进行人机交互就成为人们不断追求和奋斗的目标。这其中如何自动回答用户的各类问题，也成为了自然语言处理领域的研究热点和难点。受到当前技术水平的限制，根据候选答案的来源不同以及问题种类的不同，问答系统所采用的技术手段也不尽相同。近年来，随着深度学习方法的不断进步，特别是超大规模预训练模型的发展，智能问答研究成果不断涌现，各类型问题的回答效果不断提高。智能问答也逐渐成为了对话助手、智能客服、搜索引擎等系统中必不可少的组成部分。以ChatGPT为代表的大模型，使得智能问答技术存在使用统一技术的可能。

<center><img src="projects/projectDetail4/ch10-search-engine.ex.webp" width=400px /></center>
<center><figcaption>用户在搜索引擎中输入“珠穆朗玛峰海拔多少米？”，系统可以直接给出“88848.86米”的答案。</figcaption></center>

<center><h2>二、传统智能问答方法</h2></center>

搜狗问答机器人所使用的问答系统框架下图所示，这也代表了非端到端问答系统的典型结构。  

<center><img src="projects/projectDetail4/qaarch.webp" width=400px /></center>

<center><h2>三、基于ChatGPT的智能问答方法</h2></center>

ChatGPT（全名：Chat Generative Pre-trained Transformer），是由OpenAI研发的聊天机器人程序，于2022年11月30日发布 。ChatGPT是人工智能技术驱动的自然语言处理工具，能够通过学习和理解人类的语言来进行对话，还能根据聊天的上下文进行互动。对话模式使 ChatGPT 能够回答连续的问题、承认错误、质疑不正确的前提并拒绝不恰当的请求。

在使用ChatGPT做智能问答时有两种方式，分别为带有提示的智能问答以及无提示的问答。有提示的问答需要用户输入一些问题相关的前提知识或任务相关的示例，ChatGPT会依据输入的内容以及自身知识回答用户提出的问题，而无提示的问答则只需要输入用户的问题，依靠ChatGPT自身的知识生成答案。

以下是使用ChatGPT作智能问答的相关示例

### 1、带有提示信息的智能问答

#### 方式一：从网页中找到包含对应的信息的界面

<center><img src="projects/projectDetail4/page_fdu.webp" width=600px /></center>

#### 方式二：将提示信息与要提问的问题拼接共同输入ChatGPT进行提问

<table style="width: 100%; max-width: 800px; margin: 0 auto">
<tbody>
<tr><td>
  <table width="100%">
  <tbody>
  <tr width="100%">
    <td width="20%">
      <center><img src="projects/projectDetail4/prompt_QA1.webp" height=250px /></center>
    </td>
    <td width="20%">
      <center><img src="projects/projectDetail4/prompt_QA2.webp" height=250px /></center>
    </td>
  </tr>

  <tr>
    <td width="20%">
      <center><figcaption>信息抽取任务</figcaption></center>
    </td>
    <td width="20%">
      <center><figcaption>总结概括任务</figcaption></center>
    </td>
  </tr>
  </tbody>
  </table>
</tr></td>
</tbody>
</table>

### 2、无提示信息智能问答

直接将待询问的问题输入ChatGPT

<table style="width: 100%; max-width: 800px; margin: 0 auto">
<tbody>
<tr><td>
  <table width="100%">
  <tbody>
  <tr width="100%">
    <td width="15%">
      <center><img src="projects/projectDetail4/QA1.webp" height=250px /></center>
    </td>
    <td width="20%">
      <center><img src="projects/projectDetail4/QA3.webp" height=250px /></center>
    </td>
  </tr>

  <tr>
    <td width="15%">
      <center><figcaption>示例一</figcaption></center>
    </td>
    <td width="20%">
      <center><figcaption>示例二</figcaption></center>
    </td>
  </tr>
  </tbody>
  </table>
</tr></td>
</tbody>
</table>

<center><h2>四、ChatGPT——实现智能回答  手工打造New Bing</h2></center>

### 1、请向ChatGPT输入提示，并提出相关问题向ChatGPT提问。

举例如下：

提示信息：

> 长江（the Changjiang River/the Yangtze River），属太平洋水系，是中国第一大河，长江干流自西而东横贯中国中部，数百条支流辐辏南北，全长6363千米（国务院数据），一说有6397千米（安徽省人民政府数据），6403千米（三江源国家公园网站），6380千米（《话说长江》数据），一般用6300余千米较为合适。长江发源于青海省西南部、青藏高原上的唐古拉山脉主峰各拉丹冬雪山，曲折东流，干流先后流经青海、四川、西藏、云南、重庆、湖北、湖南、江西、安徽、江苏、上海共11个省、自治区和直辖市，最后注入东海。流域面积180万平方千米，约占全国总面积的1/5，年入海水量9513亿立方米，占全国河流总入海水量的1/3以上。流经中国青藏高原、横断山区、云贵高原、四川盆地、长江中下游平原，流域绝大部分处于湿润地区。长江干流宜昌以上为上游，长4504公里，流域面积100万平方公里，其中直门达至宜宾称金沙江，长3464公里。宜宾至宜昌河段习称川江，长1040公里。宜昌至湖口为中游，长955公里，流域面积68万平方公里。湖口至出海口为下游，长938公里，流域面积12万平方公里。

问题：

> - 长江发源于哪里？
> - ...
> - ...
### 2、请操作ChatGPT进行无提示的问答

问题：

> - 什么是自然语言处理？
> - 请解释一下自然语言处理中的机器翻译任务？
> - ...
> - ...

<center><h2>五、ChatGPT的局限性</h2></center>

虽然ChatGPT对于一些提问能够给出优质的答案，拥有强大的语言组织能力，为用户带来超出预期的交互体验，但在使用过程中也暴漏出很多弊端，ChatGPT的强项在于组织出一个完整的答案，但给出的内容并不一定完全准确，甚至对于一些有准确答案的常识问题，也会出现漏洞，它的回答往往是大段长段，过于冗长，看似逻辑自洽，但有时是在一本正经地“忽悠人”，如果非专业人士无法分辨ChatGPT答案的准确性，极有可能会被严重误导。

下面是一些ChatGPT在某些场景下给出错误回答 或 “胡编乱造”的示例

<table style="width: 100%; max-width: 800px; margin: 0 auto">
<tbody>
<tr><td>
  <table width="100%">
  <tbody>
  <tr width="100%">
    <td width="20%">
      <center><img src="projects/projectDetail4/QA_error1.webp" height=250px /></center>
    </td>
    <td width="20%">
      <center><img src="projects/projectDetail4/QA_error2.webp" height=250px /></center>
    </td>
    <td width="20%">
      <center><img src="projects/projectDetail4/QA_error3.webp" height=250px /></center>
    </td>
    <td width="20%">
      <center><img src="projects/projectDetail4/QA_error4.webp" height=250px /></center>
    </td>
  </tr>

  <tr>
    <td width="20%">
      <center><figcaption>示例一</figcaption></center>
    </td>
    <td width="20%">
      <center><figcaption>示例二</figcaption></center>
    </td>
    <td width="20%">
      <center><figcaption>示例三</figcaption></center>
    </td>
    <td width="20%">
      <center><figcaption>示例四</figcaption></center>
    </td>
  </tr>
  </tbody>
  </table>
</tr></td>
</tbody>
</table>

