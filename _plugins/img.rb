module Jekyll
  class RenderImgTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @url, *@val= text.split(/ /)
      @alt = @val[0]
      # if @val.length > 0
      #   @width , *@height = @val[0].split(/x/)
      # end
      #
      # @img_style = "width:#{@width}px;"
      #
      # if @height.length > 0
      #   @img_style = @img_style + "height:#{@height[0]}px;"
      # end
    end

    def render(context)
      "<img class=\"pure-img\" src=\"/photos/blank.gif\" data-echo=\"#{@url}\" alt=\"#{@alt}\" />"
    end
  end
end

Liquid::Template.register_tag('img', Jekyll::RenderImgTag)
