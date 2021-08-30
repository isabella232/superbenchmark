(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[763],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3292:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),l=["components"],i={id:"configuration"},c="Configuration",s={unversionedId:"getting-started/configuration",id:"getting-started/configuration",isDocsHomePage:!1,title:"Configuration",description:"SuperBench config",source:"@site/../docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/superbenchmark/docs/getting-started/configuration",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/getting-started/configuration.md",version:"current",frontMatter:{id:"configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/superbenchmark/docs/getting-started/installation"},next:{title:"Run SuperBench",permalink:"/superbenchmark/docs/getting-started/run-superbench"}},m=[{value:"SuperBench config",id:"superbench-config",children:[]},{value:"Ansible Inventory",id:"ansible-inventory",children:[]}],u={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("h2",{id:"superbench-config"},"SuperBench config"),(0,a.kt)("p",null,"SuperBench uses a ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2/spec.html"},"YAML")," config file to configure the details of benchmarkings,\nincluding which benchmark to run, which distributing mode to choose, which parameter to use, etc."),(0,a.kt)("p",null,"Here's what default config file looks like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="superbench/config/default.yaml"',title:'"superbench/config/default.yaml"'},"# SuperBench Config\nsuperbench:\n  enable: null\n  var:\n    default_local_mode: &default_local_mode\n      enable: true\n      modes:\n        - name: local\n          proc_num: 8\n          prefix: CUDA_VISIBLE_DEVICES={proc_rank}\n          parallel: yes\n    default_pytorch_mode: &default_pytorch_mode\n      enable: true\n      modes:\n        - name: torch.distributed\n          proc_num: 8\n          node_num: 1\n      frameworks:\n        - pytorch\n    common_model_config: &common_model_config\n      duration: 0\n      num_warmup: 16\n      num_steps: 128\n      precision:\n        - float32\n        - float16\n      model_action:\n        - train\n  benchmarks:\n    kernel-launch:\n      <<: *default_local_mode\n    gemm-flops:\n      <<: *default_local_mode\n    cudnn-function:\n      <<: *default_local_mode\n    cublas-function:\n      <<: *default_local_mode\n    matmul:\n      <<: *default_local_mode\n      frameworks:\n        - pytorch\n    sharding-matmul:\n      <<: *default_pytorch_mode\n    computation-communication-overlap:\n      <<: *default_pytorch_mode\n    gpt_models:\n      <<: *default_pytorch_mode\n      models:\n        - gpt2-small\n        - gpt2-large\n      parameters:\n        <<: *common_model_config\n        batch_size: 4\n    bert_models:\n      <<: *default_pytorch_mode\n      models:\n        - bert-base\n        - bert-large\n      parameters:\n        <<: *common_model_config\n        batch_size: 8\n    lstm_models:\n      <<: *default_pytorch_mode\n      models:\n        - lstm\n      parameters:\n        <<: *common_model_config\n        batch_size: 128\n    resnet_models:\n      <<: *default_pytorch_mode\n      models:\n        - resnet50\n        - resnet101\n        - resnet152\n      parameters:\n        <<: *common_model_config\n        batch_size: 128\n    densenet_models:\n      <<: *default_pytorch_mode\n      models:\n        - densenet169\n        - densenet201\n      parameters:\n        <<: *common_model_config\n        batch_size: 128\n    vgg_models:\n      <<: *default_pytorch_mode\n      models:\n        - vgg11\n        - vgg13\n        - vgg16\n        - vgg19\n      parameters:\n        <<: *common_model_config\n        batch_size: 128\n")),(0,a.kt)("p",null,"By default, all benchmarks in default configuration will be run if you don't specify customized configuration."),(0,a.kt)("p",null,"If you want to have a quick try, you can modify this config a little bit. For example, only run resnet101 model."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"copy the default config to a file named ",(0,a.kt)("inlineCode",{parentName:"li"},"resnet.yaml")," in current path.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp superbench/config/default.yaml resnet.yaml\n"))),(0,a.kt)("li",{parentName:"ol"},"enable only ",(0,a.kt)("inlineCode",{parentName:"li"},"resnet_models")," in the config and remove other models except resnet101 under ",(0,a.kt)("inlineCode",{parentName:"li"},"benchmarks.resnet_models.models"),".",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{3,11} title="resnet.yaml"',"{3,11}":!0,title:'"resnet.yaml"'},"# SuperBench Config\nsuperbench:\n  enable: ['resnet_models']\n  var:\n# ...\n# omit the middle part\n# ...\n    resnet_models:\n      <<: *default_pytorch_mode\n      models:\n        - resnet101\n      parameters:\n        <<: *common_model_config\n        batch_size: 128\n")))),(0,a.kt)("h2",{id:"ansible-inventory"},"Ansible Inventory"),(0,a.kt)("p",null,"SuperBench leverages ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/"},"Ansible")," to run benchmarking workloads on managed nodes,\nyou need to provide an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html"},"inventory")," file\nto configure host list for managed nodes."),(0,a.kt)("p",null,"Here're some basic examples as your starting point."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"One managed node, same node as control node."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="local.ini"',title:'"local.ini"'},"[all]\nlocalhost ansible_connection=local\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Two managed nodes, one is control node and the other can be remote accessed."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="mix.ini"',title:'"mix.ini"'},"[all]\nlocalhost ansible_connection=local\n10.0.0.100 ansible_user=username ansible_ssh_private_key_file=id_rsa\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Eight managed nodes, all can be accessed remotely."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="remote.ini"',title:'"remote.ini"'},"[all]\n10.0.0.[100:103]\n10.0.0.[200:203]\n\n[all:vars]\nansible_user=username\nansible_ssh_private_key_file=id_rsa\n")))))}p.isMDXComponent=!0}}]);