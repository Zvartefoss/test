import * as React from 'react'
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../constants';

export default class SpButtonTile extends React.Component {
    render(){
        const hasSubtext = this.props.Subtext != null;
        const hasChild = this.props.children != null;
        const hasTextSize = this.props.TextSize != null;
        const hasSubtextSize = this.props.SubtextSize != null;
        const hasMargin = this.props.Margin != null;
        const hasChildLeft = this.props.ChildLeft != null;
        const hasChildWidth = this.props.ChildWidth != null;

        const box = {
            borderRadius: 10,
            width: '100%',
            height: this.props.style !== undefined 
                ? this.props.style["height"] !== undefined 
                    ? this.props.style["height"] 
                    : 90
                : 90,
            backgroundColor: COLORS.Champagne,
            justifyContent: 'center', 
            textAlign: 'center',
        }

        const content = {
            marginHorizontal: hasMargin 
                ? this.props.Margin 
                : hasChildWidth 
                    ? (box.height-this.props.ChildWidth)/2
                    : 30,
            overflow: 'hidden',
            justifyContent: 'center',
            height: '100%',
        }

        const titleText = {
            fontSize: hasTextSize ? this.props.TextSize : 20,
            fontFamily: TYPOGRAPHY.FONT_FAMILY_MEDIUM,
            color: COLORS.RussianViolet,
            textAlign: hasSubtext ? 'center' : 'left',
        }

        const titleBox = {
            paddingLeft: hasChildLeft ? 15 : 0,
            justifyContent: 'center',
            overflow: 'hidden',
            flexGrow: 1,
        }

        const childBox = {
            flexGrow: 0,
        }

        const subtext = {
            fontSize: hasSubtextSize ? this.props.SubtextSize : 12,
            textAlign: 'center',
            fontFamily: TYPOGRAPHY.FONT_FAMILY_MEDIUM,
            color: COLORS.TaupeGray,
            marginTop: 8,
        }

        const main = {
            flex: 0,
            flexDirection: hasChildLeft ? 'row-reverse' : 'row',
            justifyContent: hasSubtext ? 'center' : 'flex-start',
        }

        return (
            <TouchableOpacity style = {[box, this.props.style]} onPress={this.props.onPress}>
                <View style={[content]}>

                    <View style={[main]}>

                        <View style={[titleBox]}>
                            <Text style={[titleText]}>{this.props.Text}</Text>
                        </View>

                        { hasChild && 
                        <View style={[childBox, hasChildWidth && {height: this.props.ChildWidth, width: this.props.ChildWidth}]}>
                            {this.props.children}
                        </View> 
                        }
                    </View>
                    
                    { hasSubtext && 
                    <Text style={[subtext]}>{this.props.Subtext}</Text> 
                    }
                    
                </View>
            </TouchableOpacity>
        )
    }
}