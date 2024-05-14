---
title: This might be a longer title so that i can check if there are any issues with the title length and how i can mitigate it
date: '2023-03-14'
---

This is a rough experiment for using line-clamp but animating between the truncated and fully expanded states. We’re not able to apply a transition to the -webkit-line-clamp directly so my solution requires some extra steps to smoothly animate between states.

-webkit-line-clamp truncates a block of text at a given number of lines. This is something that isn’t easily done without line-clamp, it would require calculating and setting a fixed height to the text block and hiding overflowing content. There is actually really good support for line-clamp even though it is unfortunately only available with the webkit prefix.
Animation steps

To efficiently transition between the two states, truncated and expanded, we need to calculate and set some CSS custom properties at the time of the transition. This calculation requires the layout to take 3 different states.

State 1 is the truncated state using -webkit-line-clamp: 3; to clamp the number of visible lines of text to 3. While in this state we get the height of the container element using getBoundingClientRect and set it as a custom property on the container, this custom property is used for a max-height on the container max-height: var(--truncate-height, auto);. This max-height won’t do anything in this state since the height of the container is already naturally that height.
