var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _class,_temp,_jsxFileName="/home/jsamr/Programmation/react-native-render-html/packages/legacy/src/HTMLImage.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var defaultImageStyle={resizeMode:"cover"};var emptyObject={};var styles=_reactNative.StyleSheet.create({image:{resizeMode:"cover"},errorBox:{borderWidth:1,borderColor:"lightgray",overflow:"hidden",justifyContent:"center"},errorText:{textAlign:"center",fontStyle:"italic"},container:{flexDirection:"row",alignSelf:"stretch",justifyContent:"center"}});function extractImgStyleProps(_ref){var resizeMode=_ref.resizeMode,tintColor=_ref.tintColor,overlayColor=_ref.overlayColor;return{resizeMode:resizeMode,tintColor:tintColor,overlayColor:overlayColor};}function attemptParseFloat(value){var result=parseFloat(value);return Number.isNaN(result)?null:result;}function normalizeSize(dimension){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var containerDimension=options.containerDimension||null;var enablePercentWidth=options.enablePercentWidth||false;if(dimension===null||dimension===undefined||Number.isNaN(dimension)){return null;}if(typeof dimension==="number"){return dimension;}if(typeof dimension==="string"){if(dimension.search("%")!==-1&&enablePercentWidth&&typeof containerDimension==="number"){var parsedFloat=attemptParseFloat(dimension);if(parsedFloat===null||Number.isNaN(parsedFloat)){return null;}return parsedFloat*containerDimension/100;}else if(dimension.trim().match(/^[\d.]+$/)){return attemptParseFloat(dimension);}}return null;}function extractHorizontalSpace(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},marginHorizontal=_ref2.marginHorizontal,leftMargin=_ref2.leftMargin,rightMargin=_ref2.rightMargin,margin=_ref2.margin;var realLeftMargin=leftMargin||marginHorizontal||margin||0;var realRightMargin=rightMargin||marginHorizontal||margin||0;return realLeftMargin+realRightMargin;}function derivePhysicalDimensionsFromProps(_ref3){var width=_ref3.width,height=_ref3.height,contentWidth=_ref3.contentWidth,enablePercentWidth=_ref3.enableExperimentalPercentWidth;var normalizeOptionsWidth={enablePercentWidth:enablePercentWidth,containerDimension:contentWidth};var normalizeOptionsHeight={enablePercentWidth:false};var widthProp=normalizeSize(width,normalizeOptionsWidth);var heightProp=normalizeSize(height,normalizeOptionsHeight);return{width:widthProp,height:heightProp};}function deriveRequiredDimensionsFromProps(_ref4){var enablePercentWidth=_ref4.enablePercentWidth,contentWidth=_ref4.contentWidth,flatStyle=_ref4.flatStyle,physicalDimensionsFromProps=_ref4.physicalDimensionsFromProps;var normalizeOptionsWidth={enablePercentWidth:enablePercentWidth,containerDimension:contentWidth};var normalizeOptionsHeight={enablePercentWidth:false};var styleWidth=normalizeSize(flatStyle.width,normalizeOptionsWidth);var styleHeight=normalizeSize(flatStyle.height,normalizeOptionsHeight);return{width:typeof styleWidth==="number"?styleWidth:physicalDimensionsFromProps.width,height:typeof styleHeight==="number"?styleHeight:physicalDimensionsFromProps.height};}function scaleUp(minDimensions,desiredDimensions){var aspectRatio=desiredDimensions.width/desiredDimensions.height;if(desiredDimensions.width<minDimensions.width){return scaleUp(minDimensions,{width:minDimensions.width,height:minDimensions.width/aspectRatio});}if(desiredDimensions.height<minDimensions.height){return scaleUp(minDimensions,{height:minDimensions.height,width:minDimensions.height*aspectRatio});}return desiredDimensions;}function scaleDown(maxDimensions,desiredDimensions){var aspectRatio=desiredDimensions.width/desiredDimensions.height;if(desiredDimensions.width>maxDimensions.width){return scaleDown(maxDimensions,{width:maxDimensions.width,height:maxDimensions.width/aspectRatio});}if(desiredDimensions.height>maxDimensions.height){return scaleDown(maxDimensions,{height:maxDimensions.height,width:maxDimensions.height*aspectRatio});}return desiredDimensions;}function scale(_ref5,originalBox){var minBox=_ref5.minBox,maxBox=_ref5.maxBox;return scaleDown(maxBox,scaleUp(minBox,originalBox));}function sourcesAreEqual(source1,source2){return source1&&source2&&source1.uri===source2.uri||source1===source2;}function identity(arg){return arg;}function _computeImageBoxDimensions(params){var computeImagesMaxWidth=params.computeImagesMaxWidth,contentWidth=params.contentWidth,flattenStyles=params.flattenStyles,imagePhysicalWidth=params.imagePhysicalWidth,imagePhysicalHeight=params.imagePhysicalHeight,requiredWidth=params.requiredWidth,requiredHeight=params.requiredHeight;var horizontalSpace=extractHorizontalSpace(flattenStyles);var _flattenStyles$maxWid=flattenStyles.maxWidth,maxWidth=_flattenStyles$maxWid===void 0?Infinity:_flattenStyles$maxWid,_flattenStyles$maxHei=flattenStyles.maxHeight,maxHeight=_flattenStyles$maxHei===void 0?Infinity:_flattenStyles$maxHei,_flattenStyles$minWid=flattenStyles.minWidth,minWidth=_flattenStyles$minWid===void 0?0:_flattenStyles$minWid,_flattenStyles$minHei=flattenStyles.minHeight,minHeight=_flattenStyles$minHei===void 0?0:_flattenStyles$minHei;var imagesMaxWidth=typeof contentWidth==="number"?computeImagesMaxWidth(contentWidth):Infinity;var minBox={width:minWidth,height:minHeight};var maxBox={width:Math.min(imagesMaxWidth,maxWidth,typeof requiredWidth==="number"?requiredWidth:Infinity)-horizontalSpace,height:Math.min(typeof requiredHeight==="number"?requiredHeight:Infinity,maxHeight)};if(typeof requiredWidth==="number"&&typeof requiredHeight==="number"){return scale({minBox:minBox,maxBox:maxBox},{width:requiredWidth,height:requiredHeight});}if(imagePhysicalWidth!=null&&imagePhysicalHeight!=null){return scale({minBox:minBox,maxBox:maxBox},{width:imagePhysicalWidth,height:imagePhysicalHeight});}return null;}var HTMLImageElement=(_temp=_class=function(_PureComponent){(0,_inherits2.default)(HTMLImageElement,_PureComponent);var _super=_createSuper(HTMLImageElement);function HTMLImageElement(props){var _this;(0,_classCallCheck2.default)(this,HTMLImageElement);_this=_super.call(this,props);_this.mounted=false;_this.invalidateRequirements(props);var state={imagePhysicalWidth:_this.__cachedPhysicalDimensionsFromProps.width,imagePhysicalHeight:_this.__cachedPhysicalDimensionsFromProps.height,requiredWidth:_this.__cachedRequirements.width,requiredHeight:_this.__cachedRequirements.height,imageBoxDimensions:null,error:false};_this.state=(0,_extends2.default)({},state,{imageBoxDimensions:_this.computeImageBoxDimensions(props,state)});return _this;}(0,_createClass2.default)(HTMLImageElement,[{key:"invalidateRequirements",value:function invalidateRequirements(props){var contentWidth=props.contentWidth,enableExperimentalPercentWidth=props.enableExperimentalPercentWidth,style=props.style;var physicalDimensionsFromProps=derivePhysicalDimensionsFromProps(props);this.__cachedFlattenStyles=_reactNative.StyleSheet.flatten(style)||emptyObject;this.__cachedPhysicalDimensionsFromProps=physicalDimensionsFromProps;this.__cachedRequirements=deriveRequiredDimensionsFromProps({contentWidth:contentWidth,enablePercentWidth:enableExperimentalPercentWidth,flatStyle:this.__cachedFlattenStyles,physicalDimensionsFromProps:physicalDimensionsFromProps});}},{key:"computeImageBoxDimensions",value:function computeImageBoxDimensions(props,state){var computeImagesMaxWidth=props.computeImagesMaxWidth,contentWidth=props.contentWidth;var imagePhysicalWidth=state.imagePhysicalWidth,imagePhysicalHeight=state.imagePhysicalHeight,requiredWidth=state.requiredWidth,requiredHeight=state.requiredHeight;var imageBoxDimensions=_computeImageBoxDimensions({flattenStyles:this.__cachedFlattenStyles,computeImagesMaxWidth:computeImagesMaxWidth,contentWidth:contentWidth,imagePhysicalWidth:imagePhysicalWidth,imagePhysicalHeight:imagePhysicalHeight,requiredWidth:requiredWidth,requiredHeight:requiredHeight});return imageBoxDimensions;}},{key:"componentDidMount",value:function componentDidMount(){this.mounted=true;this.fetchPhysicalImageDimensions();}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.mounted=false;}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){var _this2=this;var sourceHasChanged=!sourcesAreEqual(prevProps.source,this.props.source);var requirementsHaveChanged=prevProps.width!==this.props.width||prevProps.height!==this.props.height||prevProps.style!==this.props.style;var shouldRecomputeImageBox=requirementsHaveChanged||this.state.imagePhysicalWidth!==prevState.imagePhysicalWidth||this.state.imagePhysicalHeight!==prevState.imagePhysicalHeight||this.props.contentWidth!==prevProps.contentWidth||this.props.computeImagesMaxWidth!==prevProps.computeImagesMaxWidth;if(requirementsHaveChanged){this.invalidateRequirements(this.props);this.setState({requiredWidth:this.__cachedRequirements.width,requiredHeight:this.__cachedRequirements.height});}if(sourceHasChanged){if(this.__cachedRequirements.width===null||this.__cachedRequirements.height===null){this.fetchPhysicalImageDimensions();}}if(shouldRecomputeImageBox){this.setState(function(state,props){return{imageBoxDimensions:_this2.computeImageBoxDimensions(props,state)};});}}},{key:"fetchPhysicalImageDimensions",value:function fetchPhysicalImageDimensions(){var _this3=this;var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props;var source=props.source;var shouldFetchFromImgAPI=!!(source==null?void 0:source.uri);if(this.__cachedPhysicalDimensionsFromProps.width!=null&&this.__cachedPhysicalDimensionsFromProps.height!=null){this.setState({imagePhysicalWidth:this.__cachedPhysicalDimensionsFromProps.width,imagePhysicalHeight:this.__cachedPhysicalDimensionsFromProps.height});}else if(shouldFetchFromImgAPI){_reactNative.Image.getSize(source.uri,function(imagePhysicalWidth,imagePhysicalHeight){_this3.mounted&&_this3.setState({imagePhysicalWidth:imagePhysicalWidth,imagePhysicalHeight:imagePhysicalHeight,error:false});},function(){_this3.mounted&&_this3.setState({error:true});});}}},{key:"renderImage",value:function renderImage(imageBoxDimensions,imageStyles){var _this4=this;var source=this.props.source;return _react.default.createElement(_reactNative.Image,{source:source,onError:function onError(){return _this4.setState({error:true});},style:[defaultImageStyle,imageBoxDimensions,imageStyles],testID:"image-layout",__self:this,__source:{fileName:_jsxFileName,lineNumber:406,columnNumber:7}});}},{key:"renderAlt",value:function renderAlt(){var imageBoxDimensions=this.computeImageBoxDimensions(this.props,this.state);return _react.default.createElement(_reactNative.View,{style:[styles.errorBox,{height:(imageBoxDimensions==null?void 0:imageBoxDimensions.height)||this.props.imagesInitialDimensions.height,width:(imageBoxDimensions==null?void 0:imageBoxDimensions.width)||this.props.imagesInitialDimensions.width}],testID:"image-error",__self:this,__source:{fileName:_jsxFileName,lineNumber:421,columnNumber:7}},this.props.alt?_react.default.createElement(_reactNative.Text,{style:[styles.errorText,{color:this.props.altColor}],__self:this,__source:{fileName:_jsxFileName,lineNumber:436,columnNumber:11}},this.props.alt):false);}},{key:"renderPlaceholder",value:function renderPlaceholder(){return _react.default.createElement(_reactNative.View,{style:this.props.imagesInitialDimensions,testID:"image-placeholder",__self:this,__source:{fileName:_jsxFileName,lineNumber:448,columnNumber:7}});}},{key:"renderContent",value:function renderContent(imgStyles){var _this$state=this.state,error=_this$state.error,imageBoxDimensions=_this$state.imageBoxDimensions;if(error){return this.renderAlt();}if(imageBoxDimensions===null){return this.renderPlaceholder();}return this.renderImage(imageBoxDimensions,imgStyles);}},{key:"render",value:function render(){var _this$__cachedFlatten=this.__cachedFlattenStyles,width=_this$__cachedFlatten.width,height=_this$__cachedFlatten.height,remainingStyle=(0,_objectWithoutProperties2.default)(_this$__cachedFlatten,["width","height"]);var imgStyles=extractImgStyleProps(remainingStyle);var style=[styles.container,remainingStyle];if(this.props.onPress){return _react.default.createElement(_reactNative.TouchableHighlight,{onPress:this.props.onPress,style:style,__self:this,__source:{fileName:_jsxFileName,lineNumber:472,columnNumber:9}},this.renderContent(imgStyles));}return _react.default.createElement(_reactNative.View,{style:style,__self:this,__source:{fileName:_jsxFileName,lineNumber:477,columnNumber:12}},this.renderContent(imgStyles));}}]);return HTMLImageElement;}(_react.PureComponent),_class.propTypes={source:_propTypes.default.object.isRequired,alt:_propTypes.default.string,height:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]),width:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]),style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),computeImagesMaxWidth:_propTypes.default.func.isRequired,contentWidth:_propTypes.default.number,enableExperimentalPercentWidth:_propTypes.default.bool,imagesInitialDimensions:_propTypes.default.shape({width:_propTypes.default.number,height:_propTypes.default.number}),altColor:_propTypes.default.string,onPress:_propTypes.default.func,testID:_propTypes.default.string},_class.defaultProps={enableExperimentalPercentWidth:false,computeImagesMaxWidth:identity,imagesInitialDimensions:{width:100,height:100},style:{}},_temp);var _default=HTMLImageElement;exports.default=_default;