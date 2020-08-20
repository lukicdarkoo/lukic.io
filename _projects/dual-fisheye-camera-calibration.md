---
title: Dual Fisheye Camera Calibration
period: 2019/02 - 2019/06 
thumbnail: /images/camera_calibration_residuals.png
tags: academic medium
keywords: [ Camera Calibration, Dual Fisheye, Bundle Adjustment, Optimisation, OpenCV ]
report: /files/Dual_Fisheye_Camera_Calibration.pdf
code: https://gitlab.com/lukicdarkoo/camera-calibration
website: https://gitlab.com/lukicdarkoo/calib-tools
---

<img src="/images/camera_calibration_residuals.png" /> 
We develop a calibration algorithm for a dual fisheye camera (Ricoh Theta V) and chessboard corner finding tool for highly distorted images.

<!--more-->

The project is done as a semester project at TOPO laboratory. The purpose of the project was to develop a calibration algorithm for a dual fisheye camera with lenses oriented in the opposite direction. The intrinsic parameters are of both cameras, as well as a rotation between the cameras, are determined using nonlinear least-squares optimisation. Multiple approaches are evaluated to maximise accuracy and minimise correlation between determined parameters. In addition, a simple semiautomatic chessboard corner finding tool is developed to obtain data set from highly distorted images.
