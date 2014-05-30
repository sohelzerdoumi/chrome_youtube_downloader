// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var s = document.createElement('script');
s.src = chrome.extension.getURL("injected.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);