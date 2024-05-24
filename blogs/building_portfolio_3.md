---
title: Setting up and developing this website
date: '2024-05-18'
description: The next iteration of the portfolio series where I talk about choosing the tech stack for my website and the thought process behind it.
tags: ['portfolio', 'tools']
---

This blog is part of a series that I am writing to document my journey of creating a portfolio website from scratch. I highly recommend that you start with the first one which walks you through the whole process of [how I managed to convince myself to create a portfolio website](/blog/building_portfolio_1).

This particular blog might be a bit longer than the others since I would be getting into the actual nitty-gritties of my development process, the problems that I faced and the thought process behind solving those problems. So I suggest you grab your cup of coffee, sit down and lets get into the meaty stuff _(pause)_.

## 🌐 Deciding on a framework

While there are a lot of ways to go about developing a website in 2024, I mostly tend towards solutions that are battle-tested and robust. I’ve worked with [React](https://react.dev/), [Svelte](https://svelte.dev/) and [Angular](https://angular.io/) in the past, and out of those three I personally prefer Svelte and React more. In my opinion, these two are easier to work with and more intuitive compared to Angular, but that’s just me.

So, deciding between Svelte and React was tough, mainly because both of them are so good in their own ways. Both of them have amazing [DX](https://github.blog/2023-06-08-developer-experience-what-is-it-and-why-should-you-care/), good library support and offer out of the box meta-frameworks supporting them. Now, since the current project that I am working on in my company uses [SvelteKit](https://kit.svelte.dev/), I have had a fair bit of time on my hands to tinker around with it. One thing I wasn’t able to play around with was Next.js 13. I remember hearing its announcement and thinking to myself, “Wow, they are finally getting folder based routing” _(while sitting on my high horse since SvelteKit already had that 😌)_. Anyway, coming back to the task at hand, I was using SvelteKit in my day to day development tasks already, so I thought why not build the portfolio using Next.js 13 that would literally kill two birds with one stone _(I don’t condone violence)_, I would be building my portfolio and simultaneously learn all the cool stuff about this new release. For anyone who is trying to decide how to go on about choosing a stack/framework for your site, I would highly recommend using the tech you already know, especially, if the work you plan on doing is time bounded. Once you are comfortable with a stack that helps you get things done, you can explore out into the wilderness of the internet and choose any library/or a next-gen framework to build your next project. Or you could use something that you aren’t familiar with but do keep in mind that it might take longer for you to get things working, so don’t be too harsh on yourself and lose your motivation. Coming back to the task at had, I decided that my weapon of choice was going to be The React Framework for the Web a.k.a [Next.js](https://nextjs.org/).

## 🏗️ Folder Structure

I followed all the steps that were necessary to get the boiler plate code up and running. After setting that up the first thing that I wanted to do was to devise a folder structure that would help me organise files and iterate on them quickly once I start developing the site. Believe me when I say, a messy folder structure can really put a dent in your productivity. So, I did just that, a couple of [DDG](https://duckduckgo.com/) searches _(yes, I don’t use google)_ later I had found a structure that aligned with my workflow.

```txt
├── ./app
│   ├── (routes)
│   │   ├── blog
│   │   │   ├── not-found.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── _components
│   ├── _sections
│   ├── _utilities
│   └── favicon.ico
└── blogs
    ├── never.md
    ├── gonna.md
    ├── give.md
    ├── you.md
        └── up.md
```

> Next.js uses file based routing, if you want to read about it you can [check out their docs](https://nextjs.org/docs/app/building-your-application/routing)

So, there are 2 things that you might see in the above structure and be like wtf is that, lets address them.

- [Private folders](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders) (folders with “\_” prefix), essentially do two things, firstly, they help in organising files having similar context, and, secondly, they tell the routing system that the folder along with its contents should not be considered as a part of routing.
- [Route groups](https://nextjs.org/docs/app/building-your-application/routing/colocation#route-groups) (folder surrounded with parenthesis”()”), also tell the routing system to remove that folder as part of the route, but allows its contents to still be a part of the routing system.

This seemed really intuitive to me since I like the idea of my routes being separated from other files, and generally I have a lot of files that I like to organise w.r.t what they help me achieve.

## 🛠️ Getting all the tools and libraries

Now, although I had the basic Next.js project running and the folder structure organised, I still had to gather a bunch of tools that would help me be more productive and focus on the key aspects of my site rather than reinventing the wheel. There are a couple of things that I like to setup in a frontend project that help me write bug-free (and by free, I mean reduce the amount of bugs 😛) code.

Following are the things that made my life easier particularly while developing this project:

- A css framework or a library helps me write css in a better manner than its native implementation, for this I usually would opt for something like [shadcn/ui](https://ui.shadcn.com/) or [Radix](https://www.radix-ui.com/) which are prebuilt component libraries, but since I wanted this site to be **truly mine** I went with the minimalist approach and just chose [tailwind](https://tailwindcss.com/) as my weapon.
- A linter, for those of you who don’t know, is a program that checks your code and tells you about obvious bugs upfront rather than having to go in the “Test>Find a bug>Fix>Test” loop. It doesn’t guarantee you a bug-free codebase but really helps you identify common mistakes that can be checked via static code analysis and save you a bunch of time. Bugs like using a variable which is not declared (believe me, this happens more often than you might think) is something a linter can easily catch. So, I used [ESLint](https://eslint.org/) for this project, which is kind of an industry standard linter for JS based projects.
- A code formatter, not much to explain here, a code formatter just keeps the code neat and clean (as best as it can, ofc). I chose [Prettier](https://prettier.io/) for this, which is another industry standard formatter for many languages (don’t quote me on this btw).
- Since I planned on writing my blogs in [markdown files](https://www.markdownguide.org/getting-started/) i needed way to parse and show them as HTML inside my blog. I found out that Next.js has an [official package which helps in parsing `.md` files as markup](https://nextjs.org/docs/app/building-your-application/configuring/mdx). So I went ahead and used that, but I needed something more. You know how there is some metadata which related with each blog, such as the date it was written on, the tags associated with it, the blog description and much more. While I was checking about how to work with `.md` files I got to know that the metadata actually resides inside the `.md` file itself (generally) and is called [Front Matter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/). Okay quick detour, this is how front matter looks like inside a `.md` file.

  ```markdown
      ---
      title: A blog about how I conquered Russia, JK just JS rants
      date: 2024-05-18
      ---

      # Your blog heading
  ```

  The “—-” mark the start and end of the Front matter.

  Okay, back to the point, so I found this amazing library called [gray-matter](https://github.com/jonschlinkert/gray-matter) which helped me solve this issue of parsing front matter of my markdown files and use it at my convenience.

- The last thing but definitely not the least, I needed a way to animate stuff on my website, because of course its 2024, it needed some ✨Pizzaz✨. There were a couple of options for this too, since the JS ecosystem is vast, but I went ahead with [framer motion](https://www.framer.com/motion/introduction/). I had always wanted to try my hands on it but never got the time to, and this seemed like the perfect opportunity to give it a go.

Setting up the project did take time, and it would take you some time too, especially if you’re doing it for the first time, but eventually it makes your life wayyyy easier, if done correctly.

## 👨🏽‍💻 Time to code

With all these things set-up, it was time to code, _finally_, and so I did. It won’t make sense for me to go over each and every line of code, explaining why I did, what I did. Instead, if you are really interested you can check [this very project on my github](https://github.com/souvikmishra/portfolio) and maybe [shoot me an email](mailto:mishra.souvik911@gmail.com) if you have any specific questions. I’d be glad to answer.
In the next blog, we’ll go over the details of how I managed to host this site so that all the wonderful people on the internet can access it. From buying the domain to setting up the hosting and finally getting the first version up and running we’ll cover all the bases. Until then stay motivated, stay curious and keep building! ❤️
