---
title: Automating Gas Auditing in Smart Contracts - A Journey from Manual Review to Automated Analysis
date: '13 FEB 2024'
---

# Automating Gas Auditing in Smart Contracts: A Journey from Manual Review to Automated Analysis

###  A Journey from Manual Review to Automated Analysis

[MALIK](https://substack.com/profile/101132224-malik)

13 FEB 2024


Six months ago, I was a gas auditor in code4rena and basically, all I had to do was check out smart contracts find ways to reduce gas usage, write a report of my observations then get paid depending on the amount of gas cost I was able to reduce, it was fun actually but I noticed something after three audits all findings are the same, developers tend to repeat the same inefficient patterns across most of their code, then an idea came to me instead of spending 11hrs to maybe audit a code maybe I could use my already existing patterns to automate the audit.

**IDEA 1**

I came up with an initial idea to enhance an AI model by using my pre-existing patterns. I planned to feed the smart contracts that I needed to audit to the AI model as input, and then based on my existing patterns, the AI would identify any inefficiencies. I implemented this feature using Lang chain. However, to cut a long story short, I encountered issues with LLMs, particularly Gpt 3.5, which proved to be very unintelligent and not suitable for the task.

**IDEA 2**

I asked chat gpt what I should do, and the answer was to build a static analysis tool, now this is something I’ve never done before, so I did my research turns out there are multiple ways to build a static analysis tool, the first method I use way to use regex for pattern matching which went well, too well tbh, what I did was express my existing patterns in regex format use the format to pattern match the smart contract I was to audit then input it out with the line number of the specific, very easy right?(😅)., the problem with this method was that regex was too strict and sometimes it gave me a false negative, output an inefficiency that was not present, not cool.

**IDEA 3(Ast(Abstract Syntax tree)**

Whenever you compile your code, the parser automatically generates a tree data structure that represents the control flow of your code, from the topmost object to the downmost of how the code is structured. This means that you have a data structure that represents how your code is structured, which you can use to refactor your code, analyze it, and even stare at the data structure for days, racking your brain about which way or method you will use to traverse the tree. However, let's not get sidetracked here. The main point is that you can use this tree to identify the inefficient parts of your source code. In my case, I used my existing pattern to traverse the tree and identify the inefficiencies(this was actually hard a bit and the code was a bit too long).

**Conclusion**

The funny part of this was after I wrote the code to automate the auditing I stopped auditing in general, The best part about this was one of the topmost dudes in the web3 industry messaged me and was like I liked what you did there(I think he was looking to recruit some devs).

[](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5ddb2a27-2eed-4fb9-8f0d-cabcb6c36672_1158x612.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5ddb2a27-2eed-4fb9-8f0d-cabcb6c36672_1158x612.png)

And Now that I think of it I wish I had replied with “Yeah that, 's very simple tbh all I had to do was pattern match and traverse some stupid data structure, you know? it’s very easy you on the other hand you are very impressive my man, you are the greatest, I love you bro”

In case you want to take a look at the codebase [here](https://github.com/malik672/gas-analyzer) (I wrote this in my rust early days, so all ye seniors forgive my noobish code and bestow me your grace and insights to write more efficiently).