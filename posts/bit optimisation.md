---
title: Mastering Bit Optimization - Unleashing the Power of Efficient Code
date: '29 JAN 2024'
---

# Mastering Bit Optimization: Unleashing the Power of Efficient Code

### Mastering Bit Optimization

[MALIK](https://substack.com/profile/101132224-malik)

29 JAN 2024

Nowadays, programmers often skip over bit optimizations when writing code, relying on compilers to handle everything and optimize their code for efficiency. However, have you ever wondered: what if the compiler isn't efficient enough? What if you find yourself in a situation where you have to write in assembly? Perhaps you want to impress someone or write the most optimized code. The truth is, if you're an infra dev, a system language developer, a compiler dev, or a system dev, understanding the way bits work, especially bit optimization, is crucial.

Let me share my story. In 2020, I made the decision to switch from frontend development to blockchain development. Looking back, it's probably the best decision I've made in my tech journey. My reason was naive and simple: I wanted to understand how crypto worked. The first language I had to learn was Solidity. If you've ever written in Solidity, you know how inefficient the compiler can be. Coming from a frontend background, I knew nothing about bit optimization or compilers, to be honest. My awakening came when [fiveoutofnine](https://x.com/fiveoutofnine/status/1470102097937027072?s=20) wrote a chess engine in Solidity, manipulating bits one by one. To me, it was magic; to him, it was math and reasoning. Another shock came when the OpenSea engineering team released Seaport, one of the most optimized smart contracts, written in a mixture of Solidity and Yul. Yul is a low-level code that grants smart contract developers total control over memory, storage, and even control flow.

Enough with the preamble, let's dive into the world of bit optimization and unravel some cool techniques 😎. But before we embark on this journey, a heads-up: this article isn't for the faint of heart or beginners. We're assuming you have a solid grasp of how bits work, including arithmetic operations using bits. If not, check out this [primer](https://dev.to/stephengade/mastering-bitwise-operations-a-simplified-guide-2031).

**Two’s Complement**

Two’s complement is probably one of the most important things to know. What’s two complement? Two’s complement is just a method of representing signed integers in binary using the most significant bit. It involves inverting an integer, either signed or unsigned, then adding 1 to it. Simple, there we have it, the two’s complement.

```plaintext
1011(Original bit)
0100(Flipped bits)
------------------
0101(Flipped bits plus one)
```

**Toggle the kth bit in a word**

How do you toggle the kth bit in a word? To do this, what we need to do is quite simple. The idea is to perform a shift on k, shifting it to the left, and perform an XOR (my favorite bit operation) with the original bit. Quite easy, right?

```plaintext
- Toggle the third bit; k = 3
Set bit = x ^ (1 << k)
11001(Original bit)
00100(k = 3) shifted 
-----------------------------
11101(XOR operation of 11001 and 00100)
```

**Swap two integers without using a temporary variable**

Swapping two integers is one of my favorites because you get to see the power of XOR. So, to do this, let’s assume you have two variables x and y, and you want to swap them. What you simply do is XOR multiple times (have to show this).

```plaintext
Note: This will probably reduce performance. Use a temp var instead. And ^ stands for XOR.
x = x ^ (y ^ x)
y = y ^ (x ^ y)
```

**Setting the kth bit in a word**

How do you set the kth bit in a word to 1? To do this, what we need to do is quite simple. The idea is to perform a shift on 1 to the left by k positions (this creates a mask). Once that’s done, perform an OR operation with the original bit. Quite easy, right? The whole idea is just creating a mask, to be honest.

```plaintext
- Set the third bit to 1; k = 3
Set bit = x | ~ (1 << k)
11001(Original bit)
00100(k = 3) shifted 1 to the left by 3 times
-----------------------------
11101(OR operation of 11001 and 00100)
```

**Extract a bit field**

How do you extract the bit field in an array of bits? To do this, what we need to do is quite simple. The idea is to generate a mask that will allow you to extract your bit field. After that, shift the extracted bit to the extreme right. Quite easy, right?

```plaintext
We are extracting the second bit field.
x        = 10111 10101 11111
mask     = 00000 11111 00000
x & mask = 00000 10101 00000
----------------------------
Shr(shift to the right) by 5
Shr      = 00000 00000 10101
```

**Minimum of two bits without branching**

To find the minimum without branching:

```plaintext
r = y ^ ((x ^ y) & ~(x < y))
```

**Maximum of two bits**

To find the maximum without branching:

```plaintext
r = x ^ ((x ^ y) & ~(x < y))
```

The end, folks. Thanks for reading. If you want to delve deep into bit manipulation, check out:


- [Bit Twiddling Hacks (my favorite, by a Stanford professor)](https://graphics.stanford.edu/~seander/bithacks.html).
- [Hacker's Delight by Henry Warren Jr](https://en.wikipedia.org/wiki/Hacker%27s_Delight)
- Then check out this cool [MIT OpenCourseWare course](https://www.youtube.com/watch?v=ZusiKXcz_ac).
```