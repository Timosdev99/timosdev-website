# Mastering Bit Optimization: Unleashing the Power of Efficient Code

### mastering bit optimization


[MALIK](https://substack.com/profile/101132224-malik)

29 JAN 2024

Share

Nowadays programmers just skip over bit optimizations when writing code and let’s be honest it’s not like they need it they have the compiler to do everything for them and optimize their code to be efficient but have you ever asked yourself , what if the compiler is not efficient enough, what if you find yourself in a situation where you have to write in assembly, probably you want to impress someone or you want to write the most optimized code the truth is if you are a infra dev or you write a system lang, a compiler dev or probably a system dev then you probably need to understand the way bit works and most importantly bit optimization.

Now let me tell you my story, 2020 I made a decision to switch from frontend dev to a blockchain dev, a decision when I look back is probably the best decision, I’ve made in my tech journey my reason was naive and simple I wanted to understand the way crypto worked. The first language I had to learn then was solidity, if you have ever written solidity then you have to recognize how inefficient the compiler is, coming from a frontend background I didn’t know anything about bit optimization or compilers to be honest (I knew they existed but why should I care about them). my first awakening was seeing [fiveoutofnine](https://x.com/fiveoutofnine/status/1470102097937027072?s=20) write a chess engine in solidity and the way he did it was typically insane, dude was interacting with the bit one by one, he arranged the bit inside a slot of 256 bits, to me it was magic to him it was maths and reasoning, the second shock came when opensea engineering team released seaport one the most the optimized smart contracts in existence, the contracts were written in a mixture of solidity and yul, in case you do not know yul is a low level code that grants smart contract dev total control over memory and storage and they can probably get control over control flow of the contract

Thanks for reading malik’s Substack! Subscribe for free to receive new posts and support my work.

Subscribed

Enough with the preamble, let's dive into the world of bit optimization and unravel some cool techniques 😎. But before we embark on this journey, a heads-up: this article isn't for the faint of heart or beginners. We're assuming you have a solid grasp of how bits work, including arithmetic operations using bits. If not, check out this [primer](https://dev.to/stephengade/mastering-bitwise-operations-a-simplified-guide-2031).

**Two’s Complement**

Two’s complement is probably one of the most important things to know, what’s two complement? two’s complement is just a method of representing sign integers in binary using the most significant bit, it involves inverting an integer either signed or unsigned then adding 1 to it, simple there we have it the two’s complement.

```
1011(Original bit)
0100(flipped bits)
------------------
0101(flipped bits plus one)
```

**Toggle the kth bit in a word**

how do you toggle the kth bit in a word? to do this what we need to do is quite simple, the idea is perform a shift on k shifting it to the left and perform an XOR (my favorite bit operation) with the original bit, quite easy right.

```
- toggle the third bit; k = 3
set bit = x ^ (1 << k)
11001(original bit)
00100(k = 3) shifted 
-----------------------------
11101(xor operation of 11001 and 00100)
```

**Swap two integers without using a temporary variable**

swapping two integers is one of my favorites, why because you get to see the power of XOR, so to do this let’s assume you have two variables x, y and you want to swap them what you simply do is xor multiple times (have to show this).

```
Note: this will probably reduce performance use a temp var instead and ^ stands for xor
x = x ^ (y ^ x)
y = y ^ (x ^ y)
```

**Setting the kth bit in a word**

how do you set the kth bit in a word to 1? to do this what we need to do is quite simple, the idea is perform a shift on 1 to the left by k positions (this creates a mask) once that’s done then and perform an OR operation with the original bit, quite easy right, the whole idea is just creating a mask to be honest.

```
- set the third bit to 1; k = 3
set bit = x | ~ (1 << k)
11001(original bit)
00100(k = 3) shifted 1 to the left by 3 times
-----------------------------
11101(or operation of 11001 and 00100)
```

**Extract a bit field**

how do you extract the bit field in an array of bits? to do this what we need to do is quite simple, the idea is to generate a mask that will make you extract your bit field after that you then shift the extract bit to the extreme right, quite easy right?

```
we are extracting the second bit field.
x        = 10111 10101 11111
mask     = 00000 11111 00000
x & mask = 00000 10101 00000
----------------------------
shr(shift to the right) by 5
shr      = 00000 00000 10101
```

**Minimum of two bits without branching**

to find the minimum without branching

```
r = y ^ ((x ^ y) & ~(x < y))
```

**Maximum of two bits**

to find the maximum without branching

```
r = x ^ ((x ^ y) & ~(x < y))
```

The end folks, thanks for reading. you want to go in deep into bit manipulation then check out:

[Bit Twiddling Hacks my favorite, this is by a Standford professor](https://graphics.stanford.edu/~seander/bithacks.html).

[Hacker's Delight by Henry warren jr](https://en.wikipedia.org/wiki/Hacker%27s_Delight)

Then check out this cool [mitopencourseware course](https://www.youtube.com/watch?v=ZusiKXcz_ac).