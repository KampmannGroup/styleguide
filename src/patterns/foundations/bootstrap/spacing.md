---
title: Spacing
maturity: draft
control: exclude
styles: ''
inlinestyles: '
  <style>
    .wrapper{
      display:flex;
    }

    .background{
      background: #ababab;
      display: inline-flex;
    }

    .element{
      background: #0e2249;
      width: 7rem;
      height: 7rem;
      max-width: 100%;
      max-height: 100%;
    }

    .inner{
      width: 7rem;
      height: 7rem;
      background:white;
      box-sizing: border-box;
    }
  </style>
'
---
<h6 class="headline headline--h6">Margin (Abstand nach außen)</h6>

<div class="wrapper row">
  <div class="wrapper__element col">
    <p>m-1</p>
    <div class="background">
      <div class="element m-1"></div>
    </div>
  </div>

  <div class="wrapper__element col">
    <p>m-2</p>
    <div class="background">
      <div class="element m-2"></div>
    </div>
  </div>

  <div class="wrapper__element col">
    <p>m-3</p>
    <div class="background">
      <div class="element m-3"></div>
    </div>
  </div>

  <div class="wrapper__element col">
    <p>m-4</p>
    <div class="background">
      <div class="element m-4"></div>
    </div>
  </div>
</div>


<h6 class="headline headline--h6">Padding (Abstand nach innen)</h6>

<div class="wrapper row">
  <div class="wrapper__element col">
    <p>p-1</p>
    <div class="background">
      <div class="inner p-1 m-1">
        <div class="element"></div>
      </div>
    </div>
  </div>

  <div class="wrapper__element col">
    <p>p-2</p>
    <div class="background">
      <div class="inner p-2 m-1">
        <div class="element"></div>
      </div>
    </div>
  </div>

  <div class="wrapper__element col">
    <p>p-3</p>
    <div class="background">
      <div class="inner p-3 m-1">
        <div class="element"></div>
      </div>
    </div>
  </div>

  <div class="wrapper__element col">
    <p>p-4</p>
    <div class="background">
      <div class="inner p-4 m-1">
        <div class="element"></div>
      </div>
    </div>
  </div>
</div>

{{ page.inlinestyles }}