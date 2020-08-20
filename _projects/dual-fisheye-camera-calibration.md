---
title: Dual Fisheye Camera Calibration
period: 2019/02 - 2019/06 
thumbnail: /images/dual_camera_setup.png
tags: [ academic, medium ]
keywords: [ Camera Calibration, Dual Fisheye, Bundle Adjustment, Optimisation, OpenCV ]
report: /files/Dual_Fisheye_Camera_Calibration.pdf
code: https://gitlab.com/lukicdarkoo/camera-calibration
website: https://gitlab.com/lukicdarkoo/calib-tools
---

<img src="/images/dual_camera_setup.png" /> 
We developed a calibration algorithm for a dual fisheye camera (Ricoh Theta V) and chessboard corner finding tool for highly distorted images.

<!--more-->

The project is done as a semester project at <a href="https://www.epfl.ch/labs/topo/">TOPO laboratory</a>.
The purpose of the project was to develop a calibration algorithm for a dual fisheye camera with lenses oriented in the opposite direction.
The intrinsic parameters of both cameras, as well as a rotation between the cameras, are determined using nonlinear least-squares optimisation.
Multiple approaches are evaluated to maximize accuracy and minimize correlation between determined parameters.
In addition, a simple semiautomatic chessboard corner finding tool is developed to obtain data set from highly distorted images.
