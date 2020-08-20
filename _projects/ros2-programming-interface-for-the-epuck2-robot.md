---
title: ROS2 Programming Interface for the E-puck2 Robot
period: 2020/02 - 2020/08
thumbnail: /images/msc_logo.png
tags: [ academic, long ]
keywords: [ ROS2, ROS, epuck2, Webots, Navigation, SLAM ]
report: /files/E-puck2_ROS2_Webots.pdf
code: https://github.com/lukicdarkoo/master-thesis-epuck2-ros2
video: https://drive.google.com/file/d/1bAQZHKiABBnGzEFWNlT9EziD2_v1eviu/view?usp=sharing
slides: https://docs.google.com/presentation/d/1YV-51SGsprzxfHyJ8RK_57QdNamdJlQc84MnZjDfCy8/edit?usp=sharing
---

<img src="/images/msc_logo.png" />

Developed <a href="https://index.ros.org/doc/ros2/">ROS2</a> driver for <a href="https://www.gctronic.com/doc/index.php/e-puck2">e-puck2 physical robot</a>, improved <a href="https://cyberbotics.com/">Webots</a> support for ROS2 and created plenty of examples.

<!--more-->

Robotics simulations have been proven to be a powerful tool for develop-ing a robot controller as they are easy to set up, cheap, fast, and convenientto use.
However, the final objective is usually to deploy the controller on thereal robots or even to run the controller on an arbitrary robot.
This thesispresents a ROS2 driver for e-puck2 physical robots and a generalized ROS2driver for Webots simulated robots.
The ROS2 drivers expose a nearly identical ROS2 interface that allows a controller to interact in the same way withthe physical e-puck2 and the simulated robots without changes.
Effectively, it allows the controller developers a seamless transition between simulatedand physical e-puck2 robots or other simulated robots.
The ROS2 driversare validated in multiple scenarios, like navigation and mapping.
The re-sults prove that researchers can quickly validate their ROS2 controllers onthe e-puck2 physical or simulated robot and other Webots simulated robots.