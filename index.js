    // 获取元素
    var username = document.querySelector('input[name="username"]')
    var clas = document.querySelector('#clas')
    var yuan = document.querySelector('input[name="yuan"]')
    var xian = document.querySelector('input[name="xian"]')
    var num = document.querySelector('input[name="num"]')
    var colo = document.querySelector('input[name="colo"]')
    var tbody = document.querySelector('tbody')
    var btn = document.querySelector('input[name="btn"]')
    // 商品名称：不许为空
    username.onblur = function () {
        // 判断失焦后输入框是不是为空的
        if (this.value == '') {
            alert('表单各项不允许为空')
            return false
        }
    }
    // 判断原价
    yuan.onblur = function () {
        if (this.value == '') {
            alert('表单各项不允许为空')
            return false
        }
         // 正则表达式判断
        var reg = /^[0-9]*$/
        if (!reg.test(this.value)) {
            alert('商品原价不符合书写规范')
            return false
        }
    }
    //   判断现价
    xian.onblur = function () {
        if (this.value == '') {
            alert('表单各项不允许为空')
            return false
        }
        // 正则表达式判断
        var reg = /^[0-9]*$/
        if (!reg.test(this.value)) {
            alert('商品现价不符合规范')
            return false
        }
    }
    // 判断数量
    num.onblur = function () {
        if (this.value == '') {
            alert('表单各项不允许为空')
            return false
        }
        var reg = /^[0-9]*$/
        if (!reg.test(this.value)) {
            alert('数量不符合规范')
            return false
        }
    }
       
    // 编辑表格
    // 给按钮设置点击事件添加一个新表格
    btn.onclick = function () {
        var tr = document.createElement('tr')
           // 将获取到的姓名的值 插入到tbody中
        // 创建td tr td插入到tr tr插入tbody
        var _username = username.value
        var td = document.createElement('td')
          // 将值放在td中 元素.innerHTML = '值'
        td.innerHTML = _username
        tr.appendChild(td)

        var _clas = clas.value
        var td = document.createElement('td')
         // 将值放在td中 元素.innerHTML = '值'
        td.innerHTML = _clas
        tr.appendChild(td)

        var _yuan = yuan.value
        var td = document.createElement('td')
        td.innerHTML = _yuan
        tr.appendChild(td)

        var _xian = xian.value
        var td = document.createElement('td')
        td.innerHTML = _xian
        tr.appendChild(td)

        var _num = num.value
        var td = document.createElement('td')
        td.innerHTML = _num
        tr.appendChild(td)
       

        var index ='sddsd'
        var td = document.createElement('td')
        td.innerHTML = index
        tr.appendChild(td)

        var index = '删除'
        var td = document.createElement('td')
        td.innerHTML = index
        tr.appendChild(td)

        tbody.appendChild(tr)
        username.value = ''
        clas.value = ''
        yuan.value = ''
        xian.value = ''
        num.value = ''
          
        // 删除表格
        $('tr>td:last-child').on('click',function(){
            console.log(this)
            $(this).parent().remove()
        })
    }

    // 点击切换功能
    $('ul>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active').parent().next().next().find('li').removeClass('active').eq($(this).index()).addClass('active');
    })
    $('input:radio:first').attr('checked', 'true');
    $('input:radio:last').attr('checked', 'flase');
  res =  $('input:radio:first').val();
  res1 =  $('input:radio:last').val();
  console.log(res,res1);