(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[491],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),h=l(t),u=a,p=h["".concat(o,".").concat(u)]||h[u]||d[u]||i;return t?r.createElement(p,s(s({ref:n},m),{},{components:t})):r.createElement(p,s({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=h;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2801:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return h}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),s=["components"],c={id:"benchmarks"},o="Benchmarks Design",l={unversionedId:"design-docs/benchmarks",id:"design-docs/benchmarks",isDocsHomePage:!1,title:"Benchmarks Design",description:"Goals",source:"@site/../docs/design-docs/benchmarks.md",sourceDirName:"design-docs",slug:"/design-docs/benchmarks",permalink:"/superbenchmark/docs/design-docs/benchmarks",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/design-docs/benchmarks.md",version:"current",frontMatter:{id:"benchmarks"},sidebar:"docs",previous:{title:"Superbench Design",permalink:"/superbenchmark/docs/design-docs/overview"}},m=[{value:"Goals",id:"goals",children:[]},{value:"Overall System Design",id:"overall-system-design",children:[]},{value:"Detailed Component Design",id:"detailed-component-design",children:[{value:"E2E Model Benchmarks",id:"e2e-model-benchmarks",children:[]},{value:"Micro Benchmarks",id:"micro-benchmarks",children:[]},{value:"Docker Benchmarks",id:"docker-benchmarks",children:[]},{value:"BenchmarkRegistry",id:"benchmarkregistry",children:[]}]},{value:"Interfaces",id:"interfaces",children:[{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}]}],d={toc:m};function h(e){var n=e.components,c=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"benchmarks-design"},"Benchmarks Design"),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"The design of ",(0,i.kt)("inlineCode",{parentName:"p"},"benchmarks")," has the following goals to achieve:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"High Code Quality")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extract the common code into the base class, and reduce the efforts to maintain different benchmarks.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Good Extensibility")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avoid modifying existing code when adding new benchmarks by using registration mechanism."),(0,i.kt)("li",{parentName:"ul"},"Support pre-definition of benchmarks' settings, and benchmark registration with different settings.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Good Usability")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide a unified entrance to launch benchmarks."),(0,i.kt)("li",{parentName:"ul"},"Unify the output format for all the micro-benchmarks and E2E-benchmarks, contains return_code, metrics, raw-output, etc.")),(0,i.kt)("h2",{id:"overall-system-design"},"Overall System Design"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Structure of `benchmarks` Package",src:t(2266).Z})),(0,i.kt)("p",null,"The structure of ",(0,i.kt)("inlineCode",{parentName:"p"},"benchmarks")," package can be divided into layers from the bottom up:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Abstract base classes for all kind of benchmarks, including ",(0,i.kt)("inlineCode",{parentName:"li"},"Benchmark"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ModelBenchmark"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Microbenchmark")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DockerBenchmark"),".",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Benchmark")," is the base class for all benchmarks. It defines common interfaces such as ",(0,i.kt)("inlineCode",{parentName:"li"},"run()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_preprocess()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_postprocess()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_benchmark()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"add_parser_arguments()")," and so on."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ModelBenchmark")," is the base class for all E2E models. It defines the abstract interfaces that need to be implemented by the subclasses using different frameworks, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"PytorchBase"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"TFBase")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ONNXBase"),". Each subclass will realize part of the abstract interfaces that is common for models, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"_init_distributed_setting()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_init_dataloader()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_create_optimizer()"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Microbenchmark")," is the base class for all micro benchmarks. It defines the abstract interfaces that need to be implemented by the subclasses, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"_process_raw_result()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_process_numeric_result()"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DockerBenchmark")," is the base class for real workloads based on docker. It also defines the abstract interfaces that need to be implemented by the subclasses."))),(0,i.kt)("li",{parentName:"ol"},"Derived classes for all implemented benchmarks, which need to realize all the abstract interfaces. The benchmarks will be registered into ",(0,i.kt)("inlineCode",{parentName:"li"},"BenchmarkRegistry"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"BenchmarkRegistry")," provides a way of benchmark registration, maintains all the registered benchmarks, and supports benchmark launching by ",(0,i.kt)("inlineCode",{parentName:"li"},"BenchmarkContext"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"BenchmarkContext")," provides the context to launch one benchmark, including name, parameters, platform(CPU, GPU, etc.), and framework(Pytorch, TF, ONNX, etc.)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"BenchmarkResult")," defines the structured results for each benchmark in json format, including name, return_code, start_time, end_time, raw_data, summarized metrics, reduce type, etc.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Executor")," on the uppermost layer is the entrance for all the benchmarks. It launches the benchmark by ",(0,i.kt)("inlineCode",{parentName:"p"},"BenchmarkRegistry")," and fetch ",(0,i.kt)("inlineCode",{parentName:"p"},"BenchmarkResult"),"."),(0,i.kt)("h2",{id:"detailed-component-design"},"Detailed Component Design"),(0,i.kt)("p",null,"This chapter will describe the design details of all the components in ",(0,i.kt)("inlineCode",{parentName:"p"},"benchmarks")," package."),(0,i.kt)("h3",{id:"e2e-model-benchmarks"},"E2E Model Benchmarks"),(0,i.kt)("p",null,"The E2E model benchmarks have 4-layer inheritance relationship."),(0,i.kt)("h4",{id:"training"},"Training"),(0,i.kt)("p",null,"The general process of model training is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"init_distributed_setting -> generate_dataset -> init_dataloader -> create_model -> create_optimizer -> train")),(0,i.kt)("p",null,"These functions will be executed according to the order in the following figure. The functions that exist in derived class but not in base class are abstract functions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function Execution Order in Training Process",src:t(9225).Z})),(0,i.kt)("h4",{id:"inference"},"Inference"),(0,i.kt)("p",null,"The general process of the model inference is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Init_distributed_setting -> generate_dataset -> init_dataloader -> create_model -> inference")),(0,i.kt)("p",null,"Compared with training, it just gets rid of create_optimizer operation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function Execution Order in Inference Process",src:t(2974).Z})),(0,i.kt)("h3",{id:"micro-benchmarks"},"Micro Benchmarks"),(0,i.kt)("p",null,"The micro-benchmarks have 3-layer Inheritance Relationship. There are two base classes for micro-benchmark:\n",(0,i.kt)("inlineCode",{parentName:"p"},"MicroBenchmark")," is pure-python benchmark.\n",(0,i.kt)("inlineCode",{parentName:"p"},"MicroBenchmarkWithInvoke")," is benchmark depending on third-party executable program."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function Execution Order in `MicroBenchmark`",src:t(9220).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function Execution Order in `MicroBenchmarkWithInvoke`",src:t(8063).Z})),(0,i.kt)("h3",{id:"docker-benchmarks"},"Docker Benchmarks"),(0,i.kt)("p",null,"The Docker benchmarks have 3-layer Inheritance Relationship. The Docker benchmarks need docker env ready."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function Execution Order in DockerBenchmark Process",src:t(592).Z})),(0,i.kt)("h3",{id:"benchmarkregistry"},"BenchmarkRegistry"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BenchmarkRegistry")," is designed to"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide a way to register the benchmark."),(0,i.kt)("li",{parentName:"ol"},"Avoid modifying existing code when adding new benchmarks."),(0,i.kt)("li",{parentName:"ol"},"Reduce the redundant code for benchmarks with different configurations."),(0,i.kt)("li",{parentName:"ol"},"Support benchmark selection by platform and framework, which can be used to select desired benchmark automatically.")),(0,i.kt)("h4",{id:"design"},"Design"),(0,i.kt)("p",null,"Intefaces are designed as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'class BenchmarkRegistry:\n    benchmarks = dict()\n\n    @classmethod\n    def register_benchmark(cls, name, class_def, parameters=\'\', platform=None):\n        """Register new benchmark, key is the benchmark name.\n        Args:\n            name (str): internal name of benchmark.\n            class_def (Benchmark): class object of benchmark.\n            parameters (str): predefined parameters of benchmark.\n            platform (Platform): Platform types like CUDA, ROCM.\n        """\n        pass\n\n    @classmethod\n    def create_benchmark_context(cls, name, platform=Platform.CPU, parameters=\'\', framework=Framework.NONE):\n        """Create the benchmark context.\n        Args:\n            name (str): name of benchmark in config file.\n            platform (Platform): Platform types like Platform.CPU, Platform.CUDA, Platform.ROCM.\n            parameters (str): predefined parameters of benchmark.\n            framework (Framework): Framework types like Framework.PYTORCH, Framework.ONNX.\n        Return:\n            benchmark_context (BenchmarkContext): the benchmark context.\n        """\n        pass\n\n    @classmethod\n    def get_all_benchmark_predefine_settings(cls):\n        """Get all registered benchmarks\' predefine settings.\n        Return:\n            benchmark_params (dict[str, dict]): key is benchmark name,\n              value is the dict with structure: {\'parameter\': default_value}.\n        """\n        pass\n\n\n    @classmethod\n    def launch_benchmark(cls, benchmark_context):\n        """Select and Launch benchmark.\n        Args:\n            benchmark_context (BenchmarkContext): the benchmark context.\n        Return:\n            benchmark (Benchmark): the benchmark instance contains all results,\n              None means context is invalid or no benchmark is found.\n        """\n        pass\n')),(0,i.kt)("p",null,"The structure of the BenchmarkRegistry.benchmarks is designed as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"dictionary = {\n  'benhmark1': {\n    'tag1': (benchmark1_tag1_class, predefined_arguments),\n    'tag2': (benchmark1_tag2_class, predefined_arguments),\n  },\n  'benhmark2': {\n    'tag1': (benchmark2_tag1_class, predefined_arguments),\n    'tag2': (benchmark2_tag2_class, predefined_arguments),\n  },\n  ...\n}\n")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"For E2E model benchmarks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"BenchmarkRegistry.register_benchmark('bert-large', PytorchBERT, args='--hidden_size=1024 --num_hidden_layers=24 --num_attention_heads=16 --intermediate_size=4096')\nBenchmarkRegistry.register_benchmark('bert-base', PytorchBERT, args='--hidden_size=768 --num_hidden_layers=12 --num_attention_heads=12 --intermediate_size=3072')\n")),(0,i.kt)("p",null,"For Microbenchmark:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"BenchmarkRegistry.register_benchmark('kernel-launch', KernelLaunch)\n")),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("p",null,"This chapter will describe the interfaces with the caller (Superbench executor), including the input/output format and the invoke method."),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"The inputs needed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"benchmarks")," package is simple, just the context object of the benchmark want to run:"),(0,i.kt)("h4",{id:"invoke"},"Invoke"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"    context = BenchmarkRegistry.create_benchmark_context(\n        benchmark_name, parameters=xxx, framework=xxx, platform=xxx\n    )\n\n    benchmark = BenchmarkRegistry.launch_benchmark(context)\n    if benchmark:\n        logger.info(\n            'benchmark: {}, return code: {}, result: {}'.format(\n                benchmark.name, benchmark.return_code, benchmark.result\n            )\n        )\n")),(0,i.kt)("h3",{id:"outputs"},"Outputs"),(0,i.kt)("h4",{id:"design-1"},"Design"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"result = {\n    'name': 'benchmark_name',\n    'type: BenchmarkType,\n    'run_count': N,\n    'return_code': ReturnCode,\n    'start_time': date,\n    'end_time': date,\n    'raw_data': { # Key is metrics, Array for N runs.\n        'metrics1': List[List[Number]] or List[str],\n        ...\n        'metricsM' List[List[Number]] or List[str],\n    },\n    'result': { # Key is metrics, Array for N runs,\n        'metrics1': List[Number],\n             ...\n        'metricsM': List[Number],\n    },\n    'reduce': {\n        'metrics1': ReduceType,\n             ...\n        'metricsM': ReduceType,\n    },\n}\n")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Model Benchmarks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"result = {\n    'name': 'bert-large',\n    'type': 'model',\n    'run_count': N,\n    'return_code': 0,\n    'raw_data': {\n        'throughput-train-float32': [[step1_time, ..., stepK_time], ..., [\u2026]],\n        'throughput-train-float16': [[step1_time, ..., stepK_time], ..., [\u2026]],\n        'throughput-inference-float32': [[step1_time, ..., stepK_time], ..., [\u2026]],\n        'throughput-inference-float16': [[step1_time, ..., stepK_time], ..., [\u2026]],\n    },\n    'result': {\n            'throughput-train-float32': [avg_throughput1, ..., avg_throughputN],\n            'throughput-train-float16': [avg_throughput1, ..., avg_throughputN],\n            'throughput-inference-float32': [avg_throughput1, ..., avg_throughputN],\n            'throughput-inference-float16': [avg_throughput1, ..., avg_throughputN],\n    },\n    'reduce': {\n        'throughput-train-float32': 'min',\n        'throughput-train-float16': 'min',\n        'throughput-inference-float32': None,\n        'throughput-inference-float16': None,\n    },\n}\n")),(0,i.kt)("p",null,"Micro Benchmarks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"result = {\n    'name': 'kernel_launch',\n    'type': 'micro',\n    'run_count': N,\n    'return_code': 0,\n    'raw_data': {\n        'raw_output': [raw_output1, ..., raw_outputN],\n    },\n    'result': { # Key is metrics\n        'overhead': [overhead1, ..., overheadN],\n    },\n    'reduce': {\n        'overhead': None,\n    },\n}\n")))}h.isMDXComponent=!0},2266:function(e,n,t){"use strict";n.Z=t.p+"assets/images/benchmark-structure-c15d7b54a939be845963d166083d7b53.png"},592:function(e,n,t){"use strict";n.Z=t.p+"assets/images/docker-benchmark-process-53fda6b2672098261dafde2997a7ed45.svg"},8063:function(e,n,t){"use strict";n.Z=t.p+"assets/images/micro-benchmark-process-native-95044828fdb6987404d2c8818555830d.svg"},9220:function(e,n,t){"use strict";n.Z=t.p+"assets/images/micro-benchmark-process-python-3ee5b056d03813ee1b89e1de70c0a2d4.svg"},2974:function(e,n,t){"use strict";n.Z=t.p+"assets/images/model-inference-process-5a683d4b7353f7dab8e84527eee34ec6.svg"},9225:function(e,n,t){"use strict";n.Z=t.p+"assets/images/model-training-process-0578c97eb71c10da0ac7542cdd61aac0.svg"}}]);