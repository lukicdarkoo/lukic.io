---
title: Walking Controller for a Three-link 2D Biped
period: 2018/09 - 2018/12
thumbnail: /images/legged_robot.gif
tags: [ academic, small ]
keywords: [ Kinematics, Dynamics, Locomotion, MATLAB, Simulation, Differential Equations, Genetic Algorithm ]
code: https://github.com/lukicdarkoo/legged-robots
report: /files/LeggedRobots_Three-link_Biped.pdf
---

<img src="/images/legged_robot.gif" />
We modeled and visualized the 3-link biped, and designed a walking controller.

<!--more-->


The goal of the project was to create a simple walking humanoid robot. In the first stage of the project, we had to develop equations for forward kinematics, inverse kinematics and dynamic model of the robot. Afterwards, a simulation is developed by visualising different parts of the model and solving the equations of the motion (ODE). Finally, the controller is designed (PID) to follow the trajectory (we have designed the trajectory) of a walking gate. In addition, the robot had to be energy efficient, handle perturbation, achieve different speeds and keep torques under the given limit.

This was a project for course <a href="https://edu.epfl.ch/coursebook/en/legged-robots-MICRO-507">Legged robots</a>.